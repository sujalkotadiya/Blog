import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Assets/edit-bg.jpg'; // Import CSS for styling

const EditPost = ({ posts, setPosts }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const postToEdit = posts.find((post) => post.id === parseInt(id));
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (postToEdit) {
            setTitle(postToEdit.title);
            setContent(postToEdit.content);
        }
    }, [postToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !content) {
            alert("Please fill in both fields.");
            return;
        }

        const updatedPosts = posts.map((post) =>
            post.id === postToEdit.id ? { ...post, title, content } : post
        );

        setPosts(updatedPosts);
        navigate('/view');
    };

    return (
       <div className='bg-edit'>
         <div className="container mx-auto my-8 ">
            <h1 className="text-3xl mb-6 text-white"><span className='bg-blue-600 bg-opacity-70 px-2 py-1 rounded'>Edit Post</span></h1>
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
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Update Post
                </button>
            </form>
        </div>
       </div>
    );
};

export default EditPost;
