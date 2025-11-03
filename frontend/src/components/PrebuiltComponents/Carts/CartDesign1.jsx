import React from 'react';

const CartDesign1 = () => {
    const cartItems = [
        { id: 1, name: 'React Masterclass', price: 49.99, quantity: 1, image: '📘' },
        { id: 2, name: 'Node.js Complete Guide', price: 39.99, quantity: 2, image: '📗' },
    ];

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="bg-white p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-8">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <div className="flex items-center space-x-4">
                                <div className="text-4xl">{item.image}</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-600">${item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-3">
                                    <button className="w-8 h-8 bg-white border border-gray-300 rounded hover:bg-gray-100">-</button>
                                    <span className="font-medium">{item.quantity}</span>
                                    <button className="w-8 h-8 bg-white border border-gray-300 rounded hover:bg-gray-100">+</button>
                                </div>
                                <button className="text-red-600 hover:text-red-700 font-medium">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Total */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-lg text-gray-700">Subtotal:</span>
                        <span className="text-lg font-semibold">${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartDesign1;