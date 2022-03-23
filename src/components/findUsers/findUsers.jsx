import style from './findUsers.module.css';

const FindUsers = (props) => {
    return <div className={style.users_wrapper}>
        {
            props.users.map(user =>
                <div key={user.id} className={style.user}>
                    <div className={style.user_photo}>
                        <div>img</div>
                            <button onClick={() => props.follow(user.id)}>{user.isFollow ? 'unFollow': 'Follow'}</button>
                    </div>

                    <div className={style.user_info}>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                    </div>

                    <div className={style.user_location}>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </div>
                </div>
            )
        }
    </div >
};

export default FindUsers