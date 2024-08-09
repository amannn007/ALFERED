import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemSelection.css';

const items = {
    101: { name: "Pizza", price: 10, imageUrl: "https://via.placeholder.com/150" },
    102: { name: "Burger", price: 8, imageUrl: "https://via.placeholder.com/150" },
    201: { name: "Pasta", price: 12, imageUrl: "https://via.placeholder.com/150" },
    202: { name: "Salad", price: 6, imageUrl: "https://via.placeholder.com/150" },
    301: { name: "Sushi", price: 15, imageUrl: "https://via.placeholder.com/150" },
    302: { name: "Tempura", price: 13, imageUrl: "https://via.placeholder.com/150" },
};

function ItemSelection() {
    const { id } = useParams();
    const item = items[id];

    return (
        <div className="item-selection">
            <h1>Select Item</h1>
            <div className="item-card">
                <img src={item.imageUrl} alt={item.name} className="item-image" />
                <div className="item-info">
                    <h2>{item.name}</h2>
                    <p>${item.price}</p>
                    <Link to="/place-order" className="place-order-link">Place Order</Link>
                </div>
            </div>
        </div>
    );
}

export default ItemSelection;
