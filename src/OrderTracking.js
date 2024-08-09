// src/OrderTrackingModal.js
import React from 'react';
import Modal from 'react-modal';
import './OrderTracking.css';

Modal.setAppElement('#root'); // This is to prevent screen readers from reading the content outside the modal.

function OrderTrackingModal({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Order Tracking"
            className="modal"
            overlayClassName="overlay"
        >
            <div className="order-tracking-modal">
                <h2>Order Tracking</h2>
                <div className="tracking-info">
                    <p>Your order is being prepared.</p>
                    <p>It will be delivered soon!</p>
                </div>
                <button onClick={onRequestClose} className="close-button">Close</button>
            </div>
        </Modal>
    );
}

export default OrderTrackingModal;
