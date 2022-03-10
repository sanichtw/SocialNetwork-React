import { AddPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/actions/actions";
import Posts from "./posts";

const PostContainer = (props) => {
    let state = props.store.getState();

    const updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    const addPost = () => {
        props.store.dispatch(AddPostActionCreator())
    };

    return (
        <Posts profileData={state.profilePage}
            addPost={addPost}
            updateNewPostText={updateNewPostText} />
    )

};

export default PostContainer;