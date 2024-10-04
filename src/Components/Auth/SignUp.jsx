// src/components/Auth/SignUp.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some((user) => user.username === username)) {
            alert('Username already exists');
            return;
        }

        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        navigate('/login'); // Redirect to login page after signup
    };

    return (
        <div className="container mx-auto flex justify-center my-8">
            <div className='w-[500px]'>
                <h1 className="text-3xl mb-6">Sign Up</h1>
                <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                            Sign Up
                        </button>
                        <div className="text-blue-500 ">
                            Already have an account? <Link to="/login" className='underline'>Login here</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
