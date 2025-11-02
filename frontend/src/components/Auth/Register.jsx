import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // HANDLE CHANGE
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // HANDLE SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const data = await registerUser(formData);
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#D8EFE3]">
            <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Create Account
                </h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="name"
                            placeholder="John Doe"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name" 
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email" 
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
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="new-password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009245] focus:border-transparent transition"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#354E33] text-white py-3 rounded-lg transition-all shadow-md hover:shadow-lg font-bold uppercase tracking-wide"
                    >
                        {loading ? "Registering..." : "Register"}
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
