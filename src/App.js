import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RestaurantListing from './RestaurantListing';
import Menu from './Menu';
import ItemSelection from './ItemSelection';
import PlaceOrder from './PlaceOrder';
import OrderTracking from './OrderTracking';

function App() {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/" element={<RestaurantListing />} />
                    <Route path="/menu/:id" element={<Menu />} />
                    <Route path="/select/:id" element={<ItemSelection />} />
                    <Route path="/place-order" element={<PlaceOrder />} />
                    <Route path="/track-order" element={<OrderTracking />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
