import { connect } from "react-redux";
import { AddPostActionCreator } from "../../../redux/actions/actions";
import Posts from "./posts";

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(AddPostActionCreator(text))
        },
    }
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostContainer;