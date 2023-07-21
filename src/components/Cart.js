import React from 'react';
import '../styles/Cart.css';
import { useState } from 'react';
import Checkout from './Checkout.js';


const Cart = ({ cartItems, handleDelete }) => {

    const [isCartVisible, setCartVisible] = useState(true);

    const toggleCartVisibility = () => {
        setCartVisible(!isCartVisible);
    };

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price;
        });
        return total;
    };

    return (
        <div className="cart">
            <div className='cart-header'>
                <div className="cart-logo" onClick={toggleCartVisibility}><img src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Cart" /></div>
            </div>

            {!isCartVisible && (
                <>
                    <div className='checkout-line'>
                        <div className="cart-total">
                            Total: <span className="total-price">${calculateTotal()}</span>
                        </div>
                        <div className='checkout-btn'>
                            <Checkout price={calculateTotal()} />
                        </div>
                    </div>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className='cart-item-content'>
                                    <div className="item-name">{item.name}</div>
                                    <div className="item-price">{item.price}</div></div>
                                <div className='del-btn' onClick={() => handleDelete(item.id)}> x</div>
                            </div>
                        ))}
                    </div>
                </>
            )
            }
        </div >
    );
};

export default Cart;
