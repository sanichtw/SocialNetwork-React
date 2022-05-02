import { NavLink } from 'react-router-dom';
import { FriendsList } from './FriendsList/FriendsList';
import s from './nav.module.css'

const Nav = (props) => {
    return <div className={s.navPage}>
        <div className={s.navList}>
            <NavLink to="/profile" className={navLink => navLink.isActive ? s.active : s.item}>Profile</NavLink>
            <NavLink to="/dialog" className={navLink => navLink.isActive ? s.active : s.item}>Messages</NavLink>
            <NavLink to="/news" className={navLink => navLink.isActive ? s.active : s.item}>News</NavLink>
            <NavLink to="/music" className={navLink => navLink.isActive ? s.active : s.item}>Music</NavLink>
            <NavLink to="/settings" className={navLink => navLink.isActive ? s.active : s.item}>Settings</NavLink>
            <NavLink to="/findUsers" className={navLink => navLink.isActive ? s.active : s.item}>Find Users</NavLink>
        </div >
{/* 
        <div className={s.friendsList}>
            <h4>Friends</h4>
            <div className={s.friendsItem}>
                <FriendsList friends={props.friendsData.friendsData} />
            </div>
        </div> */}
    </div>
}

export default Nav;