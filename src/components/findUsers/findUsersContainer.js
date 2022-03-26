import { connect } from "react-redux";
import { toggleFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/actions/actions";
import FindUsers from "./findUsers";

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        currentPage: state.findUsersPage.currentPage,
        pagesCount: state.findUsersPage.pagesCount,
        totalUsersCount: state.findUsersPage.totalUsersCount,
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers)