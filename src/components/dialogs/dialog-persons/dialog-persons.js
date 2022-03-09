import { NavLink } from 'react-router-dom';
import s from './dialog-persons.module.css';

const DialogPerson = (props) => {
    const path = `/dialog/${props.id}`;

    return (
        <NavLink to={path} className={s.person}>
            <div className={s.avatarImg}>
                <img src={props.avatar}></img>
            </div>
            <div className={s.personName}>{props.name}</div>
        </NavLink>
    )
};

export default DialogPerson;