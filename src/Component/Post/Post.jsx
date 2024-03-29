import React,{useEffect, useState} from 'react';
import Base from '../Base';
import { useParams } from 'react-router-dom';
import  postService  from '../../Services/PostService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';





const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    postService.getPostById(postId).then((data) => {
      setPost(data);
    });
  },[postId])

  const updatePost = (postId) => {
      navigate(`/updatepost/${postId}`);
  };

  const transaction = (postId) => {
      navigate(`/transaction`)
      console.log(`Transaction for post ID: ${postId}`);
  };

  const comment = (postId) => {
      // Logic to handle commenting on the post with postId
      console.log(`Comment on post ID: ${postId}`);
  };


    return (
        <div>
          <Base>
          
          <h1 className="text-primary">Post Details</h1>
          {post && (
            <div className="card mb-3 col-lg-7" style={{ backgroundColor: '#e0f7fa', position: 'relative' }}>
                <FontAwesomeIcon icon={faEdit} className="text-primary" style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize:'25px' }} onClick={() => updatePost(postId)} />

                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    {!post.urlField && <h3 className="text-bg-danger col-lg-6">The url you have posted is incorrect</h3>}
                    {post.urlField && <iframe src={post.urlField} className="card-img-top" style={{ width: '600px', height: '300px' }}></iframe>}

                    <p className="card-text"><strong>Cause:</strong> {post.cause}</p>
                    <p className="card-text"><strong>Details:</strong> {post.details}</p>
                    <p className="card-text"><strong>Amount Needed:</strong> {post.amountNeeded}</p>
                    <p className="card-text"><strong>Post Type:</strong> {post.postType}</p>

                    <button onClick={() => transaction(postId)} className="btn btn-primary" disabled={post.amountNeeded === 0} style={{ marginRight: '10px' }}>Donate</button>
                    <button onClick={() => comment(postId)} className="btn btn-primary">Comment</button>
                </div>
            </div>
          )}
          </Base>
        </div>
    );
};

export default Post;
