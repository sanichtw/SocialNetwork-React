import Description from './description/description';
import Posts from './posts/posts';
import s from './profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <Description />
            <Posts profileData={props.profileData}
                dispatch={props.dispatch}
                // updatePostText={props.updatePostText}
                 />
        </div>
    )
};

export default Profile;