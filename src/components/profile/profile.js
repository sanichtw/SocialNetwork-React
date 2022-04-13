import Description from './description/description';
import PostContainer from './posts/post-container';
import s from './profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <Description profile={props.profile} 
            myProfilePhoto={props.profilePhoto}
            profileStatus={props.profileStatus}
            updateProfileStatus={props.updateProfileStatus} />
            <PostContainer />
        </div>
    )
}

export default Profile;