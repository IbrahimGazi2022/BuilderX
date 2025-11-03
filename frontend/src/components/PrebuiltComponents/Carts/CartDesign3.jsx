import React from 'react';

const CartDesign3 = () => {
    const cartItems = [
        { id: 1, name: 'JavaScript Advanced', price: 69.99, quantity: 1, rating: 4.8 },
        { id: 2, name: 'Python for Beginners', price: 49.99, quantity: 1, rating: 4.9 },
        { id: 3, name: 'Full Stack Development', price: 89.99, quantity: 1, rating: 4.7 },
    ];

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="bg-gray-900 text-white p-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">Shopping Bag</h2>
                        <p className="text-gray-400">{cartItems.length} courses ready to learn</p>
                    </div>
                    <button className="text-gray-400 hover:text-white">
                        Clear All
                    </button>
                </div>

                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-6 flex-1">
                                    <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-3xl">
                                        📚
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                                            <span className="flex items-center">
                                                ⭐ {item.rating}
                                            </span>
                                            <span>•</span>
                                            <span>Video Course</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-8">
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-blue-400">${item.price}</p>
                                        <p className="text-sm text-gray-500">per course</p>
                                    </div>
                                    <button className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center transition">
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl p-8">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-xl">Total Amount:</span>
                        <span className="text-4xl font-bold">${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full py-4 bg-white text-gray-900 font-bold text-lg rounded-lg hover:bg-gray-100 transition">
                        Complete Purchase →
                    </button>
                    <p className="text-center text-blue-100 text-sm mt-4">
                        🔒 Secure payment • 30-day money-back guarantee
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartDesign3;