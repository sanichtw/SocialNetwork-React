import { connect } from "react-redux";
import {
    toggleFollow, setCurrentPage, setInProgressBtn,
    deleteInProgressBtn, requestUsers
} from "../../redux/actions/actions";
import { Component } from 'react';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import {
    getCurrentPage, getInProgressBtns, getIsFetching,
    getPageSize, getTotalUsersCount, getUsers
} from "../../redux/selectors/findUsers-selector";


class FindUsersContainer extends Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    };

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.requestUsers(pageNumber, pageSize);
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
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        inProgressBtns: getInProgressBtns(state),
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

export default compose(
    connect(mapStateToProps, {
        toggleFollow, setCurrentPage,
        setInProgressBtn, deleteInProgressBtn, requestUsers
    }),
)(FindUsersContainer)