import React from 'react';
import Navigation from "../ui/Navigation";

import '../css/about.css';

const About = () => {
    return (
        <div className="container">
            <Navigation/>

            <div className="block information">
                <div className="block">
                    <h2 className="title text-center">О нас</h2>
                    <p className="text text-center">Наша компания работает 1 день и мы успели заскамить уже 10
                        человеков, думаем это большой успех. Надеемся выйти в оборот на первый месяц - 9.500.000
                        рублей</p>
                </div>

                <div className="block">
                    <h2 className="title text-center">Наш девиз</h2>
                    <p className="text text-center">Если вас заскамили, значит вам не повезло</p>
                </div>

                <div className="block">
                    <h2 className="title text-center">Чем мы занимаемся?</h2>
                    <p className="text text-center">Мы занимаемся продажей топовых смартфонов, у нас дешевле и лучше чем
                        у конкурентов!</p>
                </div>
            </div>

            <div className="block">
                <h2 className="title">Новинка компании</h2>
                <div className="carts_box">
                    <a href="/product" className="carts_item">
                        <img className="carts_item-image" src="/images/phone1.webp" alt=""/>
                        <div className="carts_item-info">
                            <p className="carts_item-name">Товар</p>
                            <p className="carts_item-price">100₽</p>
                        </div>
                    </a>
                    <a href="/product" className="carts_item">
                        <img className="carts_item-image" src="/images/phone2.webp" alt=""/>
                        <div className="carts_item-info">
                            <p className="carts_item-name">Товар</p>
                            <p className="carts_item-price">100₽</p>
                        </div>
                    </a>
                    <a href="/product" className="carts_item">
                        <img className="carts_item-image" src="/images/phone3.webp" alt=""/>
                        <div className="carts_item-info">
                            <p className="carts_item-name">Товар</p>
                            <p className="carts_item-price">100₽</p>
                        </div>
                    </a>
                    <a href="/product" className="carts_item">
                        <img className="carts_item-image" src="/images/phone4.webp" alt=""/>
                        <div className="carts_item-info">
                            <p className="carts_item-name">Товар</p>
                            <p className="carts_item-price">100₽</p>
                        </div>
                    </a>
                    <a href="/product" className="carts_item">
                        <img className="carts_item-image" src="/images/phone5.webp" alt=""/>
                        <div className="carts_item-info">
                            <p className="carts_item-name">Товар</p>
                            <p className="carts_item-price">100₽</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;