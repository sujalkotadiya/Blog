import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Assets/details-bg.jpg';

const PostDetails = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div className="text-center">Post not found!</div>;
    }

    return (
        <div className='bg-details'>
            <div className="container mx-auto my-8 ">
                <h1 className="text-3xl font-bold mb-4 text-white "><span className='bg-blue-600 bg-opacity-70 px-2 py-1 rounded'>Title : {post.title}</span></h1>
                <p className="text-sm text-white mb-4">Date: {post.date}</p>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-lg">{post.content}</p>
                </div>
                <button className='mt-2'>
                <Link to="/view" className="inline-block ">
                    Back to Posts
                </Link>
                </button>
            </div>
        </div>
    );
};

export default PostDetails;
