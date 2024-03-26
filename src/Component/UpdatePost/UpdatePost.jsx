import Base from '../Base'
import React, { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import './UpdatePost.css'
import postService from '../../Services/PostService';

const UpdatePost = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const [updatepost, setUpdatepost] = useState({ });

    useEffect(()=>{
        postService.getPostById(postId).then((data) => {
          setUpdatepost(data);
        });
      },[postId])

    
    

    const [success, setSuccess] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatepost({ ...updatepost, [name]: value });
    };

    const updatePost = (e) => {
        e.preventDefault();
        postService.updatePost(updatepost,1).then((data) => {
            console.log(data);
            setSuccess('Post updated successfully');
            setErrorMessage('');
            navigate(`/post/${data.id}`);

          }).catch((err)=>{
            console.log("Error"+err)
            setSuccess('');
            setErrorMessage('Please fill in all required fields');
          });
    };

    return (
        <div>
        <Base>
        <div className="container">
            <h1 className="text-center">Update Post</h1>

            {success && <div className="alert alert-success"><strong>Success!</strong> {success}</div>}
            {errorMessage && <div className="alert alert-danger"><strong>Error!</strong> {errorMessage}</div>}

            <form id="form1" className="mt-4 form-container" onSubmit={updatePost}>
                <div className="form-group">
                    <label htmlFor="pTitle">Title:</label>
                    <input type="text" id="pTitle" name="title" value={updatepost.title} onChange={handleInputChange} className="form-control" pattern="[A-Za-z ]{3,}" required />
                    <div className="text-danger">
                        {updatepost.title && (updatepost.title.length < 3 || !/^[A-Za-z ]+$/.test(updatepost.title)) && (
                            <p>
                                {updatepost.title.length < 3 ? "Title must be at least 3 characters long." : "Title can only contain alphabets and spaces."}
                            </p>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="pUrl">URL Field:</label>
                    <input type="url" id="pUrl" name="urlField" value={updatepost.urlField} onChange={handleInputChange} className="form-control" required />
                    <div className="text-danger">
                        {updatepost.urlField && !updatepost.urlField.startsWith('http://') && !updatepost.urlField.startsWith('https://') && (
                            <p>Invalid URL format. Please include 'http://' or 'https://'.</p>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="pCause">Cause:</label>
                    <input type="text" id="pCause" name="cause" value={updatepost.cause} onChange={handleInputChange} className="form-control" pattern="[A-Za-z ]{3,}" required />
                    <div className="text-danger">
                        {updatepost.cause && !/^[A-Za-z ]+$/.test(updatepost.cause) && (
                            <p>Cause can only contain alphabets and spaces.</p>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="pDetails">Details:</label>
                    <input type="text" id="pDetails" name="details" value={updatepost.details} onChange={handleInputChange} className="form-control" pattern="[A-Za-z ]{10,}" required />
                    <div className="text-danger">
                        {updatepost.details && updatepost.details.length < 10 && (
                            <p>Details must be at least 10 characters long.</p>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="pAmount">Amount Needed:</label>
                    <input type="number" id="pAmount" name="amountNeeded" value={updatepost.amountNeeded} onChange={handleInputChange} className="form-control" pattern="[0-9]{5,}" required />
                    <div className="text-danger">
                        {updatepost.amountNeeded && (updatepost.amountNeeded < 10000 || isNaN(updatepost.amountNeeded)) && (
                            <p>Amount must be a number and at least 10000.</p>
                        )}
                    </div>
                </div>

                <label htmlFor="postType">PostType:</label><br />
                <select className="form-control" value={updatepost.postType} onChange={handleInputChange} name="postType">
                    <option value="">Select Post Type</option>
                    <option value="Startup">Startup</option>
                    <option value="Medical">Medical</option>
                    <option value="CharityOrganisation">CharityOrganisation</option>
                </select>
                <div className="text-danger">
                    {updatepost.postType === "" && (
                        <p>Post Type is required, please select a value.</p>
                    )}
                </div>

                <input type="submit" className="btn btn-success" value="Update Post" disabled={!updatepost.title || !updatepost.urlField || !updatepost.cause || !updatepost.details || !updatepost.amountNeeded || !updatepost.postType} />
            </form>
            </div>
        </Base>
    </div>
  )
}

export default UpdatePost