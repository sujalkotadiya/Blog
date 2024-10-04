import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/create-bg.jpg'; // Import CSS for styling

const CreatePost = ({ posts, setPosts }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !content) {
            alert("Please fill in both fields.");
            return;
        }

        const newPost = {
            id: posts.length ? posts[posts.length - 1].id + 1 : 1,
            title,
            content,
            date: new Date().toISOString().split('T')[0],
        };

        setPosts([...posts, newPost]);
        navigate('/view');
    };

    return (
        <div className='bg-create'>
            <div className="container mx-auto my-8 flex justify-center ">
                <div className='w-[500px]'>
                    <h1 className="text-3xl mb-6 text-white"><span className='bg-blue-600 bg-opacity-70 px-2 py-1 rounded'>Create a New Post</span></h1>
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Content</label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">
                            Create Post
                        </button>
                        <button className='ms-2'>
                            <Link to="/view" >
                                Back To View
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
