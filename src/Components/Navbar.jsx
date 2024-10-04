// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    return (
        <nav className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="text-xl font-bold">
                    My Blog
                </Link>
                <div className="flex items-center">
                    {user ? (
                        <>
                            <span className="text-white font-bold mr-2">{user.username}</span>
                            <span className="bg-white text-blue-500 rounded-full h-8 w-8 flex items-center justify-center mr-2">
                                {user.username.charAt(0).toUpperCase()}
                            </span>
                            <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                                <Link to={"/"}>Logout</Link>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/signup" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">
                                Sign Up
                            </Link>
                            <Link to="/login" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 ms-2">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
