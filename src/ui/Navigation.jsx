import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav">
            <Link to="/" className="logo">
                <img src="/images/logo.png" alt=""/>
            </Link>

            <ul className="nav_list">
                <li className="nav_list-item"><Link to="/about" className="nav_list-link">О нас</Link></li>
                <li className="nav_list-item"><Link to="/catalog" className="nav_list-link">Каталог</Link></li>
                <li className="nav_list-item"><Link to="/find" className="nav_list-link">Где нас найти?</Link></li>
            </ul>

            <div className="nav_buttons">
                <Link to="/login" className="nav_button">Вход</Link>
                <Link to="/register" className="nav_button">Регистрация</Link>
            </div>
        </nav>
    );
};

export default Navigation;