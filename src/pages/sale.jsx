import React from 'react';
import { Link } from 'react-router-dom';

const Sale = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-24">
                <div className="text-center">
                    <div className="text-6xl text-gray-300 mb-6">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        No Sale Items Available
                    </h2>
                    
                </div>
            </div>
        </div>
    );
};

export default Sale; 