import React from 'react';
import Navigation from "../ui/Navigation";

import '../css/product.css';
import {useNavigate, useParams} from "react-router-dom";

const Product = ({products}) => {

    const params = useParams();
    const navigate = useNavigate();

    function isInteger(value) {
        return /^\d+$/.test(value);
    }

    if(!isInteger(params.id)) {
        return;
    }

    const product = products.find(item => item.id === Number(params.id));

    return (
        <div className="container" style={{marginBottom: '200px'}}>
            <Navigation/>

            <div className="block">
                <div className="carts_box">
                    <div className="product_box-image">
                        <img className="product_image" src={"/images/" + product.image} alt="phone"/>
                    </div>
                    <div className="product_info">
                        <p className="product_name">{product.name}</p>
                        <p className="product_price">{product.price} рублей</p>
                        <div className="nav_button product_button">Купить</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;