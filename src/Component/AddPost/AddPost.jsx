import React, { useEffect, useState } from 'react';
import Base from '../Base'
import postService from '../../Services/PostService';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {

  const [post, setPost] = useState({ });
  const navigate=useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const [success, setSuccess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const createPost = (e) => {
    e.preventDefault();
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData")) || {};
    console.log("User Id",userDataFromLocalStorage.id)
    postService.addNewPost(post,1).then((data) => {
        console.log(data);
        setSuccess('Post updated successfully');
        setErrorMessage('');
        navigate('/home');

      }).catch((err)=>{
        console.error("Error"+err)
        setSuccess('');
        setErrorMessage('Please fill in all required fields');
      });
    };

    useEffect(() => {
        const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData")) || {};
        console.log(userDataFromLocalStorage.id);
      }, []);


  return (
    <div>
    <Base>
    <div className="container">
        <h1 className="text-center">Add New Post</h1>

        {success && <div className="alert alert-success"><strong>Success!</strong> {success}</div>}
        {errorMessage && <div className="alert alert-danger"><strong>Error!</strong> {errorMessage}</div>}

        <form id="form1" className="mt-4 form-container" onSubmit={createPost}>
            <div className="form-group">
                <label htmlFor="pTitle">Title:</label>
                <input type="text" id="pTitle" name="title" value={post.title} onChange={handleInputChange} className="form-control" pattern="[A-Za-z ]{3,}" required />
                <div className="text-danger">
                    {post.title && (post.title.length < 3 || !/^[A-Za-z ]+$/.test(post.title)) && (
                        <p>
                            {post.title.length < 3 ? "Title must be at least 3 characters long." : "Title can only contain alphabets and spaces."}
                        </p>
                    )}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="pUrl">URL Field:</label>
                <input type="url" id="pUrl" name="urlField" value={post.urlField} onChange={handleInputChange} className="form-control" required />
                <div className="text-danger">
                    {post.urlField && !post.urlField.startsWith('http://') && !post.urlField.startsWith('https://') && (
                        <p>Invalid URL format. Please include 'http://' or 'https://'.</p>
                    )}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="pCause">Cause:</label>
                <input type="text" id="pCause" name="cause" value={post.cause} onChange={handleInputChange} className="form-control" pattern="[A-Za-z ]{3,}" required />
                <div className="text-danger">
                    {post.cause && !/^[A-Za-z ]+$/.test(post.cause) && (
                        <p>Cause can only contain alphabets and spaces.</p>
                    )}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="pDetails">Details:</label>
                <input type="text" id="pDetails" name="details" value={post.details} onChange={handleInputChange} className="form-control" pattern="[A-Za-z ]{10,}" required />
                <div className="text-danger">
                    {post.details && post.details.length < 10 && (
                        <p>Details must be at least 10 characters long.</p>
                    )}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="pAmount">Amount Needed:</label>
                <input type="number" id="pAmount" name="amountNeeded" value={post.amountNeeded} onChange={handleInputChange} className="form-control" pattern="[0-9]{5,}" required />
                <div className="text-danger">
                    {post.amountNeeded && (post.amountNeeded < 10000 || isNaN(post.amountNeeded)) && (
                        <p>Amount must be a number and at least 10000.</p>
                    )}
                </div>
            </div>

            <label htmlFor="postType">PostType:</label><br />
            <select className="form-control" value={post.postType} onChange={handleInputChange} name="postType">
                <option value="">Select Post Type</option>
                <option value="Startup">Startup</option>
                <option value="Medical">Medical</option>
                <option value="CharityOrganisation">CharityOrganisation</option>
            </select>
            <div className="text-danger">
                {post.postType === "" && (
                    <p>Post Type is required, please select a value.</p>
                )}
            </div>

            <input type="submit" className="btn btn-success" value="Add Post" disabled={!post.title || !post.urlField || !post.cause || !post.details || !post.amountNeeded || !post.postType} />
        </form>
        </div>
    </Base>
</div>
  )
}

export default AddPost