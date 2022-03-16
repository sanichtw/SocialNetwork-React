import { connect } from "react-redux";
import { AddPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/actions/actions";
import Posts from "./posts";

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(AddPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostContainer;