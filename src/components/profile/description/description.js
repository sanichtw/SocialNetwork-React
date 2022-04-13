import ProfileAvatar from '../avatar/avatar';
import s from './description.module.css';
import Preloader from '../../common/preloader/Preloader'
import ProfileStatus from './profile-status/profile-status';

const Description = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            <div className={s.descr}>
                <ProfileAvatar photo={props.profile.photos.large} myProfilePhoto={props.myProfilePhoto} />
                <div className={s.description_items}>
                    <div>{props.profile.aboutMe}</div>
                    <div>{props.profile.fullName}</div>
                    <div>Old: 23</div>
                </div>
            </div>
            <ProfileStatus profileStatus={props.profileStatus} updateProfileStatus={props.updateProfileStatus}/>
        </>

    )
};

export default Description