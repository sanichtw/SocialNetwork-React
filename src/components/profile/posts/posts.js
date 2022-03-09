import React from 'react';
import { AddPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/actions/actions';
import PostItem from './post-item/post-item';
import s from './posts.module.css';
// import { addNewPostActionCreater, updateNewPostActionCreater } from '../../../redux/state'

const Posts = (props) => {
    let { postsData, newPostText } = props.profileData;
    const onChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    const addPost = () => {
        props.dispatch(AddPostActionCreator())
    };

    return (
        <div>
            <div className={s.posts}>
                <h3>
                    My Posts
                </h3>
                <textarea onChange={onChange} value={newPostText}></textarea>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
                <PostItem postsData={postsData} />
            </div>
        </div >
    )
};

export default Posts;