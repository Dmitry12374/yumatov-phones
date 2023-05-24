import React, {useState} from 'react';

import classes from "./Basket.module.css";

const Basket = ({basket, add, remove}) => {
    const [isOpen, setIsOpen] = useState(false);

    let cost = 0;
    return (
        <div className={classes.basket}>

            {isOpen &&
                <div className={classes.box}>
                    {
                        Object.entries(basket).map(([id, product]) => {
                            cost += product.cost;
                            return (
                                <div className={classes.item}>
                                    <div className={classes.itemImage}>
                                        <img src={"/yumatov-phones/images/" + product.image} alt={product.name}/>
                                    </div>
                                    <div className={classes.itemContent}>
                                        <div className={classes.itemContentName}>{product.name}</div>
                                        <div className={classes.itemContentAmount}>Кол-во: {product.amount}</div>
                                        <div className={classes.itemContentPrice}>Цена: {product.cost} рублей</div>
                                        <div className={classes.itemControl}>
                                            <div className={classes.itemControlEl} onClick={() => add(product)}>+</div>
                                            <div className={classes.itemControlEl} onClick={() => remove(product)}>−</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            }
            <div className={classes.trigger} onClick={() => setIsOpen(!isOpen)}>Корзина {isOpen && <span className={classes.cost}> ({cost} рублей)</span>}</div>
        </div>
    );
};

export default Basket;