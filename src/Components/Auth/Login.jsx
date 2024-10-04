// src/components/Auth/Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find((user) => user.username === username && user.password === password);

        if (existingUser) {
            setUser(existingUser);
            localStorage.setItem('user', JSON.stringify(existingUser)); // Save user data to local storage
            navigate('/create'); // Redirect to create post page after login
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="container mx-auto my-8 flex justify-center">
            <div className='w-[500px]'>
                <h1 className="text-3xl mb-6">Login</h1>
                <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-lg">
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
                            Login
                        </button>
                        <div className="text-blue-500 ">
                            You don’t have an account? <Link to="/signup" className='underline'>Sign Up here</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
