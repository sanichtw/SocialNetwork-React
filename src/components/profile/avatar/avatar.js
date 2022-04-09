import s from './avatar.module.css';
const ProfileAvatar = (props) => {
    debugger
    return (
        <div>
            <img className={s.ava} src={props.photo ? props.photo : props.myProfilePhoto}></img>
        </div>
    )
};

export default ProfileAvatar;