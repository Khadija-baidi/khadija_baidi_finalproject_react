import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO: Implement login logic
        console.log('Login attempt with:', { email, password });
    };

    const handleRegister = () => {
        // TODO: Implement registration logic
        console.log('Navigate to registration');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* New Customer Section */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-3xl font-medium mb-2">New Customer</h2>
                        <h3 className="text-gray-600 mb-4">Register Account</h3>
                        <p className="text-gray-500 mb-6">
                            By creating an account you will be able to shop faster, be up to date
                            on an order's status, and keep track of the orders you have previously
                            made.
                        </p>
                        <button
                            onClick={handleRegister}
                            className="bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                        >
                            CONTINUE
                        </button>
                    </div>

                    {/* Returning Customer Section */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-3xl font-medium mb-2">Returning Customer</h2>
                        <p className="text-gray-600 mb-6">I am a returning customer</p>
                        
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <Link to="/forgot-password" className="text-gray-600 hover:text-gray-900">
                                    Forgot your password?
                                </Link>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    type="submit"
                                    className="bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors"
                                >
                                    SIGN IN
                                </button>
                                <span className="text-gray-500">or</span>
                                <Link to="/" className="text-gray-600 hover:text-gray-900">
                                    Return to Store
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth; 