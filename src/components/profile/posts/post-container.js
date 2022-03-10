import { AddPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/actions/actions";
import StoreContext from "../../../redux/storeContext";
import Posts from "./posts";

const PostContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();

            const updateNewPostText = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            };
            const addPost = () => {
                store.dispatch(AddPostActionCreator())
            };

            return <Posts profileData={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText} />
        }
        }

    </StoreContext.Consumer>
};

export default PostContainer;