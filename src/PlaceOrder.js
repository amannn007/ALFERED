// src/PlaceOrder.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderTrackingModal from './OrderTracking';
import './PlaceOrder.css';

function PlaceOrder() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="place-order">
            <h1>Place Order</h1>
            <div className="order-confirmation">
                <p>Your order has been placed!</p>
                <button onClick={openModal} className="track-order-button">Track Order</button>
            </div>

            <OrderTrackingModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
    );
}

export default PlaceOrder;
