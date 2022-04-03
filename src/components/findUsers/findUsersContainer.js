import { connect } from "react-redux";
import { toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/actions/actions";
import { Component } from 'react';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../api/api";


class FindUsersContainer extends Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching()
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.toggleIsFetching()
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                })
        };
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching()
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching()
                this.props.setUsers(data.items)
            })
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> :
                    <Users totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        toggleFollow={this.props.toggleFollow}
                    />}

            </>

        )
    }
};

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        currentPage: state.findUsersPage.currentPage,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        isFetching: state.findUsersPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (userId) => {
//             dispatch(toggleFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(setTotalUsersCountAC(count))
//         },
//         toggleIsFetching: () => {
//             dispatch(toggleIsFetchingAC())
//         }
//     }
// };

export default connect(mapStateToProps, {
    toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(FindUsersContainer)