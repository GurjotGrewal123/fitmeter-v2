import Filter from './Filter.js';
import React from 'react';
import ReactDOM from 'react-dom';
import API from './API.js';
import { useState } from 'react';
import Cart from './Cart.js';
import '../styles/Nutrition.css';

const Nutrition = () => {
    const [cartItems, setCartItems] = useState([]);


    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const handleDelete = (itemId) => {
        const itemIndex = cartItems.findIndex((item) => item.id === itemId);

        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems.slice(0, itemIndex), ...cartItems.slice(itemIndex + 1)];
            setCartItems(updatedCartItems);
        }
    };

    const items = API;

    return (
        <div className='nutrition'>
            <Cart className="cart" cartItems={cartItems} handleDelete={handleDelete} />
            <Filter className="filter" items={items} onBuyItem={addToCart} />
        </div>
    );
}
export default Nutrition

ReactDOM.render(<Nutrition />, document.getElementById("root"));
