import { connect } from "react-redux";
import { toggleFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetching, toggleIsFetchingAC } from "../../redux/actions/actions";
import * as axios from 'axios';
import { Component } from 'react';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";


class FindUsersContainer extends Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching()
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching()
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
        };
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching()
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching()
                this.props.setUsers(response.data.items)
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
                        follow={this.props.follow}
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

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        },
        toggleIsFetching: () => {
            dispatch(toggleIsFetchingAC())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer)