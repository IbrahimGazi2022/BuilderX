import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#D8EFE3]">
            <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Create Account
                </h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009245] focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009245] focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009245] focus:border-transparent transition"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full bg-[#354E33] text-white py-3 rounded-lg transition-all shadow-md hover:shadow-lg font-bold uppercase tracking-wide"
                    >
                        Register
                    </button>

                    <div className="text-center text-sm text-gray-500 pt-2">
                        Already have an account?{" "}
                        <Link to="/" className="text-[#354E33] font-bold hover:underline">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
