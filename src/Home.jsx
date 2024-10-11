import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost } from './reducer/postsReducer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(state => state.posts.posts);
  const status = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const handleEdit = (postId) => {
    navigate(`/edit/${postId}`);
  };

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  if (status === 'loading') {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center mt-4 text-red-500">Error: {error}</div>;
  }

  if (!posts.length) {
    return <div className="text-center mt-4">No posts available</div>;
  }

  return (
    <div className="p-4 grid grid-cols-4 gap-3">
      {posts.map(post => (
        <div key={post.id} className="bg-white p-4 rounded shadow-md mb-4">
          <h1 className="text-xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-700">{post.body}</p>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => handleEdit(post.id)}
              className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};



export default Home;