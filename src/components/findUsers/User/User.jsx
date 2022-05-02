import { NavLink } from 'react-router-dom';
import style from './user.module.css';
import userIcon from './../../../assets/images/user-icon.png';

export const User = ({ user, inProgressBtns, toggleFollow }) => {
    return <>
        <div key={user.id} className={style.user}>
            <div className={style.user_photo}>
                <NavLink to={`/profile/${user.id}`}>
                    <div className={style.userAvatar}><img src={user.photos.small || userIcon} /></div>
                </NavLink>

                <button disabled={inProgressBtns.some(id => id === user.id)} onClick={() => {
                    toggleFollow(user.id, user.followed)
                }}>
                    {user.followed ? 'unFollow' : 'Follow'}
                </button>

            </div>

            <div className={style.user_info}>
                <NavLink to={`/profile/${user.id}`}>
                    <div>{user.name}</div>
                </NavLink>
                <div>{user.status}</div>
            </div>

            <div className={style.user_location}>
                <div>{'user.location.city'}</div>
                <div>{'user.location.country'}</div>
            </div>
        </div>
    </>
}