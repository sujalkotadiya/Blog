// src/components/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-cover bg-center h-[80vh] " style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg mb-8 text-gray-500">Share your thoughts and connect with the world.</p>
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 text-white">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
