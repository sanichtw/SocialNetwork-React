import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/actions/actions";
import FindUsers from "./findUsers";

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers)