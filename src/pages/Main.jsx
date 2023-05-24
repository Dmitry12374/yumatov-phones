import React from 'react';
import Navigation from "../ui/Navigation";

import '../css/main.css';
import ProductItem from "../components/ProductItem";

const Main = ({products}) => {
    let countNew = 0;
    let countSale = 0;

    return (
        <div className="container">
            <Navigation/>

            <div className="block header">
                <h2 className="title text-center">Yumatov Phones</h2>
                <p className="text text-center">магазин смартфонов для нищих</p>

                <div className="slider">
                    <div className="swiper">

                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="/yumatov-phones/images/phone1.webp" alt="Random"/>
                                    <p>Самый дешёвый магазин в мире!</p>
                            </div>
                            <div className="swiper-slide">
                                <img src="/yumatov-phones/images/phone2.webp" alt="Random"/>
                                    <p>У нас редко бывает обмана</p>
                            </div>
                            <div className="swiper-slide">
                                <img src="/yumatov-phones/images/phone3.webp" alt="Random"/>
                                    <p>Доставка только по СДЭК</p>
                            </div>
                        </div>

                        <div className="swiper-pagination"></div>


                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>


                        <div className="swiper-scrollbar"></div>
                    </div>
                </div>
            </div>

            <div className="block">
                <h2 className="title">Новинка компании</h2>
                <div className="carts_box">
                    {
                        products.map(product => {
                            if(countNew !== 5) {
                                countNew++;
                                return (
                                    <ProductItem product={product}/>
                                )
                            }
                        })
                    }
                </div>
            </div>

            <div className="block">
                <h2 className="title">Скидка на эти товары скоро закончатся</h2>
                <div className="carts_box">
                    {
                        products.map(product => {
                            if(countSale !== 5) {
                                countSale++;
                                return (
                                    <ProductItem product={product}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;