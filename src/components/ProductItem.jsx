import React from 'react';
import {Link} from "react-router-dom";

const ProductItem = ({product}) => {
    return (
        <Link to={"/product/" + product.id} className="carts_item">
            <img className="carts_item-image" src={"/yumatov-phones/images/" + product.image} alt={product.name}/>
            <div className="carts_item-info">
                <p className="carts_item-name">{product.name}</p>
                <p className="carts_item-price">{product.price}₽</p>
            </div>
        </Link>
    );
};

export default ProductItem;