import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  postService  from '../../Services/PostService';

const Listpost = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAllPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  const viewPostDetails = (id) => {
    setSelectedPostId(id);
    console.log(id);
    navigate(`/post/${id}`);
  };

  return (
    <div>
      <h1 style={{ color: '#1e1f5c' }}>List of Posts</h1>
      {posts.length > 0 ? (
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className="card mb-3">
                <div className="card-body colour-post">
                  <h5 className="card-title">{post.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{post.cause}</h6>
                  <p className="card-text">Amount Needed: {post.amountNeeded}</p>
                  <button onClick={() => viewPostDetails(post.id)} className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts available</p>
      )}

    </div>
  );
};

export default Listpost;
