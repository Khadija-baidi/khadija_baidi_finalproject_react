import React, { useState } from 'react';
import Logo from '../assets/logo.png.webp';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gray-100 px-4 md:px-8 py-2 text-sm flex flex-col md:flex-row justify-between items-center">
                {/* Social Icons */}
                <div className="flex items-center gap-4 text-gray-600 mb-2 md:mb-0">
                    {["facebook-f", "twitter", "pinterest-p", "google-plus-g", "instagram"].map(icon => (
                        <a key={icon} href="#" className="hover:text-red-500">
                            <i className={`fab fa-${icon}`}></i>
                        </a>
                    ))}
                </div>

                {/* Center Text */}
                <div className="text-gray-600 text-center mb-2 md:mb-0">
                    Free shipping for standard order over $100
                </div>

                {/* Right Info */}
                <div className="flex items-center gap-4 text-gray-600">
                    <div className="pr-4 border-r border-gray-300">
                        fashe@example.com
                    </div>
                    <div>USD</div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="bg-white border-b border-gray-200 shadow-sm">
                <div className="px-4 md:px-8 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img src={Logo} alt="Logo" className="h-8" />
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className="text-black md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>

                    {/* Navigation Links */}
                    <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center gap-8 px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
                        <Link 
                            to="/" 
                            className={`text-gray-800 hover:text-red-500 transition-colors ${
                                location.pathname === '/' ? 'text-red-500' : ''
                            }`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/shop" 
                            className={`text-gray-800 hover:text-red-500 transition-colors ${
                                location.pathname === '/shop' ? 'text-red-500' : ''
                            }`}
                        >
                            Shop
                        </Link>
                        <Link 
                            to="/sale" 
                            className="text-gray-800 hover:text-red-500 transition-colors"
                        >
                            Sale
                        </Link>
                        <Link 
                            to="/features" 
                            className="text-gray-800 hover:text-red-500 transition-colors"
                        >
                            Features
                        </Link>
                        <Link 
                            to="/blog" 
                            className="text-gray-800 hover:text-red-500 transition-colors"
                        >
                            Blog
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-gray-800 hover:text-red-500 transition-colors"
                        >
                            About
                        </Link>
                        <Link 
                            to="/contact" 
                            className="text-gray-800 hover:text-red-500 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Right Icons */}
                    <div className="hidden md:flex items-center gap-6 text-black">
                        <a href="/profile" className="hover:text-red-500 transition-colors duration-300">
                            <span className="material-icons">person</span>
                        </a>
                        <a href="/cart" className="hover:text-red-500 transition-colors duration-300">
                            <span className="material-icons">shopping_bag</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
