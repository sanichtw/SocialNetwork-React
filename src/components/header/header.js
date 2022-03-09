import s from './header.module.css';



const Header = () => {
    return (
        <div className={s.header}>
            <img src="https://img.icons8.com/cotton/64/000000/laptop-coding.png"/>
            <h1>Social Network</h1>
        </div>
    )
};

export default Header;