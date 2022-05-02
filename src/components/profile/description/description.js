import ProfileAvatar from '../avatar/avatar';
import s from './description.module.css';
import Preloader from '../../common/preloader/Preloader'
import ProfileStatus from './profile-status/profile-status-with-hooks';

const Description = ({ profile, myProfilePhoto, profileStatus, updateProfileStatus, isOwner, setMainPhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onUploadMainPhoto = (e) => {
        setMainPhoto(e.target.files[0])
    }

    return (
        <>
            <div className={s.descr}>
                <ProfileAvatar photo={profile.photos.large} myProfilePhoto={myProfilePhoto}
                    userId={profile.userId} />
                <div className={s.description_items}>
                    <div>{profile.aboutMe}</div>
                    <div>{profile.fullName}</div>
                    <div>Old: 23</div>
                </div>
            </div>
            {!isOwner && <input onChange={onUploadMainPhoto} type="file"></input>}
            <ProfileStatus profileStatus={profileStatus} updateProfileStatus={updateProfileStatus} />
        </>

    )
};

export default Description