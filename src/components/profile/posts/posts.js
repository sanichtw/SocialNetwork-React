import React from 'react';
import PostItem from './post-item/post-item';
import s from './posts.module.css';
// import { addNewPostActionCreater, updateNewPostActionCreater } from '../../../redux/state'

const Posts = (props) => {
    let { postsData, newPostText } = props.profileData;

    const onChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    const onAddPost = () => {
        props.addPost()
    };

    return (
        <div>
            <div className={s.posts}>
                <h3>
                    My Posts
                </h3>
                <textarea onChange={onChange} value={newPostText}></textarea>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
                <PostItem postsData={postsData} />
            </div>
        </div >
    )
};

export default Posts;