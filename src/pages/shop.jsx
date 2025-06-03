import React from 'react';

const Shop = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Shop Header */}
            <div className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-gray-800">SHOP</h1>
                </div>
            </div>

            {/* Shop Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Product filters will go here */}
                    {/* Product grid will go here */}
                </div>
            </div>
        </div>
    );
};

export default Shop; 