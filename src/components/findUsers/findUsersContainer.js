import { connect } from "react-redux";
import {
    toggleFollow, setCurrentPage, setInProgressBtn, deleteInProgressBtn, getUsers
} from "../../redux/actions/actions";
import { Component } from 'react';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";


class FindUsersContainer extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                        inProgressBtns={this.props.inProgressBtns}
                        setInProgressBtn={this.props.setInProgressBtn}
                        deleteInProgressBtn={this.props.deleteInProgressBtn}
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
        isFetching: state.findUsersPage.isFetching,
        inProgressBtns: state.findUsersPage.inProgressBtns,
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
    toggleFollow, setCurrentPage,
    setInProgressBtn, deleteInProgressBtn, getUsers
})(FindUsersContainer)