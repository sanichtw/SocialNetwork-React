import Description from './description/description';
import PostContainer from './posts/post-container';
import Posts from './posts/posts';
import s from './profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <Description />
            <PostContainer profileData={props.profileData}
                dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;