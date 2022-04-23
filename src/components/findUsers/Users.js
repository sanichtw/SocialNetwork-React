import style from './findUsers.module.css';
import { Paginator } from './Paginator/Paginator';
import { User } from './User/User';


const Users = (props) => {
    return <div className={style.users_wrapper}>
        <Paginator currentPage={props.currentPage} pageSize={props.pageSize}
            totalUsersCount={props.totalUsersCount} onPageChanged={props.onPageChanged}
            portionSize={10} />

        {props.users.map(user => {
            return <User user={user} inProgressBtns={props.inProgressBtns}
                toggleFollow={props.toggleFollow} />
        })}

    </div>
};

export default Users;