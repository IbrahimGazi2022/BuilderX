import React from 'react';

const CartDesign2 = () => {
    const cartItems = [
        { id: 1, name: 'Web Development Course', price: 59.99, quantity: 1 },
        { id: 2, name: 'UI/UX Design Bootcamp', price: 44.99, quantity: 1 },
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return (
        <div className="bg-linear-to-br from-purple-50 to-blue-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Your Cart</h2>
                <p className="text-gray-600 mb-8">{cartItems.length} items in your cart</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Cart Items - 2 columns */}
                    <div className="md:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                                        <p className="text-2xl font-bold text-blue-600">${item.price}</p>
                                    </div>
                                    <button className="text-gray-400 hover:text-red-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm text-gray-600">Quantity:</span>
                                    <div className="flex items-center space-x-2">
                                        <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded">-</button>
                                        <span className="px-4 font-semibold">{item.quantity}</span>
                                        <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded">+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary - 1 column */}
                    <div className="md:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-md sticky top-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Tax (10%)</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span className="text-blue-600">${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition">
                                Checkout Now
                            </button>
                            <button className="w-full py-3 mt-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition">
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDesign2;