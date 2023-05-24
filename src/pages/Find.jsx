import React from 'react';
import Navigation from "../ui/Navigation";

import '../css/find.css';

const Find = () => {
    return (
        <div className="container">
            <Navigation/>

            <div className="block">
                <h2 className="title text-center">Где мы находимcя?</h2>
                <p className="text text-center">Данная страница содержит Все наши контакты и адрес.</p>
            </div>

            <div className="container-2">
                <div className="block">
                    <h3 className="title-2">Наш адрес:</h3>
                    <p className="text">г. Ульяновск, улица Калнина, дом 1</p>
                </div>

                <div className="block">
                    <h3 className="title-2 text-end">Наш телефон:</h3>
                    <p className="text text-end">+79123123123</p>
                </div>

                <div className="block">
                    <h3 className="title-2">Наш EMAIL:</h3>
                    <p className="text">dmitruy.yumatov@yandex.kakashka</p>
                </div>
            </div>

            <div className="block">
                <h3 className="title-2 text-center">Карта:</h3>
                <img className="map" src="/yumatov-phones/images/map.jpg" alt=""/>
            </div>
        </div>
    );
};

export default Find;