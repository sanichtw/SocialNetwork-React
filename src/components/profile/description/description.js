import ProfileAvatar from '../avatar/avatar';
import s from './description.module.css';

const Description = () => {
    return (
        <div className={s.descr}>
            <ProfileAvatar />
            <div className={s.description_items}>
                <div>About my self</div>
                <div>Name: Nikita</div>
                <div>Old: 23</div>
            </div>

        </div>
    )
};

export default Description