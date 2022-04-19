import { useEffect, useState } from 'react';
import style from './profile-status.module.css';


const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.profileStatus);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    };

    useEffect(() => {
        setStatus(props.profileStatus)
    }, [props.profileStatus]);

    return (
        <div className={style.profile_status}>
            {!editMode &&
                <span onDoubleClick={activateEditMode}>{props.profileStatus || 'No status'}</span>
            }
            {editMode &&
                <input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus value={status}></input>
            }
        </div>
    )
};

export default ProfileStatus;