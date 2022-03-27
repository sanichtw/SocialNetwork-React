import { NavLink } from 'react-router-dom';
import style from './findUsers.module.css';


const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize),
        pages = [];

    for (let i = 1; i <= pageCount; i++) {
        if (pageCount > 10 && i === 10) {
            break
        }
        pages.push(i)
    }

    return <div className={style.users_wrapper}>
        {
            pages.map(p => {
                return <span
                    onClick={() => props.onPageChanged(p)}
                    className={props.currentPage === p && style.active_page}>{p}
                </span>
            })
        }
        {
            props.users.map(user =>
            (
                <div key={user.id} className={style.user}>
                    <div className={style.user_photo}>
                        <NavLink to={`/profile/${user.id}`}>
                            <div><img src={user.photos.small} /></div>
                        </NavLink>
                        <button onClick={() => props.follow(user.id)}>{user.followed ? 'Follow' : 'unFollow'}</button>
                    </div>

                    <div className={style.user_info}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>

                    <div className={style.user_location}>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </div>
                </div>)
            )
        }
    </div >
};

export default Users;