import ProfileAvatar from '../avatar/avatar';
import s from './description.module.css';
import Preloader from '../../common/preloader/Preloader'

const Description = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.descr}>
            <ProfileAvatar photo={props.profile.photos.large} />
            <div className={s.description_items}>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.fullName}</div>
                <div>Old: 23</div>
            </div>

        </div>
    )
};

export default Description