import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Menu.css';

const menus = {
    1: [
        { id: 101, name: "Pizza", price: 10, imageUrl: "https://via.placeholder.com/150" },
        { id: 102, name: "Burger", price: 8, imageUrl: "https://via.placeholder.com/150" },
    ],
    2: [
        { id: 201, name: "Pasta", price: 12, imageUrl: "https://via.placeholder.com/150" },
        { id: 202, name: "Salad", price: 6, imageUrl: "https://via.placeholder.com/150" },
    ],
    3: [
        { id: 301, name: "Sushi", price: 15, imageUrl: "https://via.placeholder.com/150" },
        { id: 302, name: "Tempura", price: 13, imageUrl: "https://via.placeholder.com/150" },
    ],
};

function Menu() {
    const { id } = useParams();
    const menu = menus[id];

    return (
        <div className="menu">
            <h1>Menu</h1>
            <div className="menu-items">
                {menu.map(item => (
                    <div className="menu-card" key={item.id}>
                        <img src={item.imageUrl} alt={item.name} className="menu-image" />
                        <div className="menu-info">
                            <h2>{item.name}</h2>
                            <p>${item.price}</p>
                            <Link to={`/select/${item.id}`} className="select-link">Select Item</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
