import { Link } from 'react-router-dom';
import '../Assets/view-bg.jpg'; 



const ViewPosts = ({ posts, setPosts }) => {
    const handleDelete = (id) => {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
    };

    return (
        <div className='bg-view'>
          <div className="container mx-auto my-8 ">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl text-white">All Posts</h1>
                <Link to="/create">
                    <button>Create New Post</button>
                </Link>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <li key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <Link to={`/post/${post.id}`}>
                            <h2 className="text-xl font-bold">{post.title}</h2>
                        </Link>
                        <p className="text-sm text-gray-600">{post.date}</p>
                        <div className="flex justify-between mt-4">
                            <Link to={`/edit/${post.id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(post.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default ViewPosts;
