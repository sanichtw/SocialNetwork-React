import { NavLink } from 'react-router-dom';
import s from './header.module.css';



const Header = (props) => {
    return (
        <div className={s.header_container}>
            <div className={s.header}>
                <img src="https://img.icons8.com/cotton/64/000000/laptop-coding.png" />
                <h1>Social Network</h1>
                <div onClick={props.logOut}
                    className={s.login}>{props.isAuth ? <NavLink to="/login"><button>Log Out</button></NavLink>
                        :
                        <NavLink to="/login"><button>Log In</button></NavLink>}</div>
            </div>

        </div>

    )
};

export default Header;