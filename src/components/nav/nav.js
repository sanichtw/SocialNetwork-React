import { NavLink } from 'react-router-dom';
import s from './nav.module.css'

const Nav = (props) => {
    let friendsData = props.friendsData.friendsData;

    let friends = friendsData.map(fr => {
        return (
            <div key={fr.id}>
                <img src={fr.avatar}></img>
                <div>{fr.name}</div>
            </div>
        );
    });

    return <div className={s.navPage}>
        <div className={s.navList}>
            <NavLink to="/profile" className={navLink => navLink.isActive ? s.active : s.item}>Profile</NavLink>
            <NavLink to="/dialog" className={navLink => navLink.isActive ? s.active : s.item}>Messages</NavLink>
            <NavLink to="/news" className={navLink => navLink.isActive ? s.active : s.item}>News</NavLink>
            <NavLink to="/music" className={navLink => navLink.isActive ? s.active : s.item}>Music</NavLink>
            <NavLink to="/settings" className={navLink => navLink.isActive ? s.active : s.item}>Settings</NavLink>
        </div >

        <div className={s.friendsList}>
            <h4>Friends</h4>
            <div className={s.friendsItem}>
                {friends}
            </div>
        </div>
    </div>
}

export default Nav;