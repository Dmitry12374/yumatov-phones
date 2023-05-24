import React from 'react';
import Navigation from "../ui/Navigation";

import '../css/catalog.css';
import ProductItem from "../components/ProductItem";

const Catalog = ({products}) => {
    return (
        <div className="container">
            <Navigation/>

            <div className="block">
                <h2 className="title text-center">Каталог</h2>
                <p className="text text-center">Тут находится наш каталог)</p>
            </div>

            <div className="block">
                <div className="carts_box">
                    {
                        products.map(product => {
                            return (
                                <ProductItem product={product}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Catalog;