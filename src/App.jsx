import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getPostsFromLocalStorage, savePostsToLocalStorage } from './Utils/LocalStorage.js';
import Navbar from './Components/Navbar.jsx';

const ViewPosts = lazy(() => import('./Components/ViewPost'));
const CreatePost = lazy(() => import('./Components/CreatePost'));
const PostDetails = lazy(() => import('./Components/PostDetails'));
const EditPost = lazy(() => import('./Components/EditPost.jsx'));
const Login = lazy(() => import('./Components/Auth/Login.jsx'));
const Signup = lazy(() => import('./Components/Auth/SignUp.jsx'));
const HomePage = lazy(() => import('./Components/HomePage.jsx'));

function App() {
  const [posts, setPosts] = useState(getPostsFromLocalStorage());
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null; // Retrieve user data from localStorage
  });

  useEffect(() => {
    savePostsToLocalStorage(posts);
  }, [posts]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user data from local storage
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view" element={<ViewPosts posts={posts} setPosts={setPosts} />} />
          <Route path="/create" element={user ? <CreatePost posts={posts} setPosts={setPosts} /> : <Login setUser={setUser} />} />
          <Route path="/post/:id" element={<PostDetails posts={posts} />} />
          <Route path="/edit/:id" element={user ? <EditPost posts={posts} setPosts={setPosts} /> : <Login setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
