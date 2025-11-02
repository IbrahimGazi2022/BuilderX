import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleGetStarted = () => {
        if (token) {
            navigate('/builder');
        } else {
            navigate('/register');
        }
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-(--bg-color) flex flex-col">
            <nav className="absolute top-0 left-0 right-0 z-10 px-8 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* -- LOGO -- */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-[#354E33] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">B</span>
                        </div>
                        <span className="text-3xl font-bold text-(--main-text-color) tracking-wider">BuilderX</span>
                    </div>

                    {/* -- RIGHT SIDE BUTTONS -- */}
                    {!token ? (
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={handleLogin}
                                className="bg-[#354E33] text-white font-bold py-2 px-6 rounded-full text-lg transition-colors duration-300 mobile-button"
                            >
                                LOGIN
                            </button>
                            <button
                                onClick={() => navigate('/register')}
                                className="bg-[#354E33] text-white font-bold py-2 px-6 rounded-full text-lg transition-colors duration-300 mobile-button uppercase"
                            >
                                Sign Up
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate('/builder')}
                            className="bg-[#354E33] text-white font-bold py-2 px-6 rounded-full text-lg transition-colors duration-300 mobile-button"
                        >
                            Go to Builder →
                        </button>
                    )}
                </div>
            </nav>

            {/* -- HERO SECTION -- */}
            <main className="flex-1 flex items-center justify-center px-8">
                <div className="max-w-4xl mx-auto text-center">

                    {/* -- MAIN HEADING -- */}
                    <h1 className="text-6xl md:text-7xl font-bold text-(--main-text-color) mb-6 leading-tight">
                        Build Your Website
                        <span className="block text-[#5c7d2a]">Without Code</span>
                    </h1>

                    {/* -- SUB HEADING -- */}
                    <p className="text-xl text-black mb-12 max-w-2xl mx-auto leading-relaxed">
                        Create stunning platforms with our intuitive drag-and-drop builder.
                        No coding skills required.
                    </p>

                    {/* -- CTA BUTTONS -- */}
                    <div className="flex items-center justify-center space-x-4">
                        <button
                            onClick={handleGetStarted}
                            className="px-8 py-4 bg-(--main-text-color) text-white text-lg font-semibold rounded-xl transition shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Get Started Free →
                        </button>
                    </div>

                    {/* -- TRUST INDICATORS -- */}
                    <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <span className="text-(--main-text-color) text-lg">✓</span>
                            <span className='text-black'>Free Forever</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-(--main-text-color) text-lg">✓</span>
                            <span className='text-black'>No Credit Card</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-(--main-text-color) text-lg">✓</span>
                            <span className='text-black'>1000+ Users</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* -- SCROLL INDICATOR -- */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center space-y-2 text-gray-400">
                    <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Home;