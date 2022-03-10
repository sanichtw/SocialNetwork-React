import { AddPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/actions/actions";
import Posts from "./posts";

const PostContainer = (props) => {
    const updateNewPostText = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    const addPost = () => {
        props.dispatch(AddPostActionCreator())
    };

    return (
        <Posts profileData={props.profileData}
            addPost={addPost}
            updateNewPostText={updateNewPostText} />
    )

};

export default PostContainer;