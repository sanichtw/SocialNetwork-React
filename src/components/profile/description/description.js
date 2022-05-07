import ProfileAvatar from '../avatar/avatar';
import s from './description.module.css';
import Preloader from '../../common/preloader/Preloader'
import ProfileStatus from './profile-status/profile-status-with-hooks';
import { useState } from 'react';
import ProfileDataFormRedux from './ProfileDataForm/ProfileDataForm';

const Description = ({ profile, myProfilePhoto, profileStatus,
    updateProfileStatus, isOwner, setMainPhoto, saveProfileInfo }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    };

    const onUploadMainPhoto = (e) => {
        setMainPhoto(e.target.files[0])
    };

    const onSubmit = (formData) => {
        saveProfileInfo(formData).then(() => {
            setEditMode(false)
        })
    };

    return (
        <>
            <div className={s.descr}>
                <ProfileAvatar photo={profile.photos.large} myProfilePhoto={myProfilePhoto}
                    userId={profile.userId} />
                {editMode ? <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />}
            </div>
            {!isOwner && <input onChange={onUploadMainPhoto} type="file"></input>}
            <ProfileStatus profileStatus={profileStatus} updateProfileStatus={updateProfileStatus} />
        </>

    )
};


const ProfileData = ({ profile, goToEditMode, isOwner }) => {
    return <div className={s.description_items}>
        {!isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>{profile.fullName}</div>
        <div>{profile.aboutMe}</div>
        <div>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}</div>
        <div>About tech skills: {profile.lookingForAJob && profile.lookingForAJobDescription}</div>
        <div>Old: 23</div>
        <div>Contacts: {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactKey={key} contactVal={profile.contacts[key]} />
        })}</div>
    </div>
}
export const Contacts = ({ contactKey, contactVal }) => {
    return <div>
        <b>{contactKey}: </b>
        <b>{contactVal}</b>
    </div>
};


export default Description