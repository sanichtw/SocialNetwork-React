import s from './avatar.module.css';
import userIcon from './../../../assets/images/user-icon.png'
const ProfileAvatar = (props) => {
    return (
        <div>
            <img className={s.ava} src={props.photo || userIcon}></img>
        </div>
    )
};

export default ProfileAvatar;