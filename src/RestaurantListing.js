import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantListing.css';

const restaurants = [
    { id: 1, name: "Restaurant A", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "Restaurant B", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Restaurant C", imageUrl: "https://via.placeholder.com/150" },
];

function RestaurantListing() {
    return (
        <div className="restaurant-listing">
            <h1>Restaurant Listing</h1>
            <div className="restaurants">
                {restaurants.map(restaurant => (
                    <div className="restaurant-card" key={restaurant.id}>
                        <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
                        <div className="restaurant-info">
                            <h2>{restaurant.name}</h2>
                            <Link to={`/menu/${restaurant.id}`} className="menu-link">View Menu</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantListing;
