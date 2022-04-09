import Description from './description/description';
import PostContainer from './posts/post-container';
import s from './profile.module.css'

const Profile = (props) => {
    debugger
    return (
        <div className={s.profile}>
            <Description profile={props.profile} myProfilePhoto={props.profilePhoto}/>
            <PostContainer />
        </div>
    )
}

export default Profile;