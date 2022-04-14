import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../../validators/validators';
import { Textarea } from '../../common/preloader/form-control/form-control';
import PostItem from './post-item/post-item';
import s from './posts.module.css';
// import { addNewPostActionCreater, updateNewPostActionCreater } from '../../../redux/state'

const maxLength = maxLengthCreator(10),
    minLength = minLengthCreator(2);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder={"Type your text"}
                name={"NewPostText"} validate={[required, maxLength, minLength]} />
            <button>Add Post</button>
        </form>
    )
};

const AddNewPostReduxForm = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm)

const Posts = (props) => {
    let state = props.profileData;

    const onAddNewPost = (values) => {
        props.addPost(values.NewPostText)
    }

    return (
        <div>
            <div className={s.posts}>
                <h3>
                    My Posts
                </h3>
                <AddNewPostReduxForm onSubmit={onAddNewPost} />
                <PostItem postsData={state.postsData} />
            </div>
        </div >
    )
};

export default Posts;