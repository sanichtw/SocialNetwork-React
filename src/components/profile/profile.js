import Description from './description/description';
import PostContainer from './posts/post-container';
import s from './profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <Description />
            <PostContainer />
        </div>
    )
};

export default Profile;