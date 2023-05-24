import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="nav">
                    <Link to="/" className="logo">
                        <img src="/images/logo.png" alt=""/>
                    </Link>

                    <ul className="nav_list">
                        <li className="nav_list-item"><Link to="/about" className="nav_list-link">О нас</Link></li>
                        <li className="nav_list-item"><Link to="/catalog" className="nav_list-link">Каталог</Link></li>
                        <li className="nav_list-item"><Link to="/find" className="nav_list-link">Где нас найти?</Link></li>
                    </ul>

                    <ul className="nav_list footer_list">
                        <li className="nav_list-item"><img className="footer-icon" src="/images/socials/vk.svg" alt=""/></li>
                        <li className="nav_list-item"><img className="footer-icon" src="/images/socials/telegram.svg" alt=""/></li>
                        <li className="nav_list-item footer-mr"><img className="footer-icon" src="/images/socials/instagram.svg" alt=""/></li>
                    </ul>
                </div>
                <div className="copyright text text-center">2023 copyright</div>
            </div>
        </footer>
    );
};

export default Footer;