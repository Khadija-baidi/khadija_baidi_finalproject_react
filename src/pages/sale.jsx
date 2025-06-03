import React from 'react';
import { Link } from 'react-router-dom';

const Sale = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Empty Sale Content */}
            <div className="container mx-auto px-4 py-24">
                <div className="text-center">
                    <div className="text-6xl text-gray-300 mb-6">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        No Sale Items Available
                    </h2>
                    <p className="text-gray-600 mb-8">
                        There are currently no items on sale. Please check back later for upcoming deals!
                    </p>
                    <Link 
                        to="/shop" 
                        className="inline-block bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sale; 