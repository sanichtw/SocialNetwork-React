import s from './avatar.module.css';
const ProfileAvatar = (props) => {
    debugger
    return (
        <div>
            <img className={s.ava} src={props.photo}></img>
        </div>
    )
};

export default ProfileAvatar;