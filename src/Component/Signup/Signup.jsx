import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Footer from '../Footer'
import { registerUser } from '../../Services/UserService'
import { useState } from 'react'

const Signup = () => {
  const [values,setValues] =useState({
    id:0,
    name:"",
    dob: "",
    address: "",
    phonenumber: "",
     age:0,
     usertype: "",
     email:"",
     password:""
})
const [redirect,setRedirect] =useState(false)
const {name,dob,address,phonenumber,age,usertype,email,password}=values
const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
};
const onSubmit = (event)=>{
  event.preventDefault();
  setValues({...values})
      console.log(values);  
        registerUser({name,dob,address,phonenumber,age,usertype,email,password}).then(data=>{
            console.log("Data",data)
                setValues({
                    ...values,
                    id:"",
                    name:"",
                    dob:"",
                    address:"",
                    phonenumber:"",
                    age:0,
                    usertype:"",
                    email:"",
                    password:""
                })
                setRedirect(true);
              }
                
                ).catch(err=>{console.log(err)})
}
  return (
   <div>
    <div className='container-fluid'>
    <div className='jumbotron  text-info text-center'>
        <h1 >FundRaise App</h1>
        <p className='lead'>Welcome To FundRaise App</p>
        <p className='lead'>Register Page</p>
    </div>
    {/* <div className="alert alert-success" >
      <strong>Success!</strong>
    </div>
    <div className="alert alert-danger" >
      <strong>Danger!</strong> 
    </div> */}
  
<div className="row">
    <div className="col-md-6 offset-sm-3 text-left">
      <form >
        <div className="form-group">
          <label htmlFor="name" className="text-secondary">Name</label>
          <input 
          value={name}
          onChange={handleChange("name")}
           id="name" className="form-control" type="text" />
          
        </div>
        <div className="form-group">
          <label htmlFor="dob" className="text-secondary">Date of Birth</label>
          <input 
           value={dob}
           onChange={handleChange("dob")}
           id="dob" className="form-control" type="date" />
          
        </div>
        <div className="form-group">
          <label htmlFor="address" className="text-secondary">Address</label>
          <input 
           value={address}
           onChange={handleChange("address")}
           id="address" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber" className="text-secondary">Phone Number</label>
          <input
           value={phonenumber}
           onChange={handleChange("phonenumber")}
            id="phonenumber" className="form-control" type="tel" />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="text-secondary">Age</label>
          <input 
           value={age}
           onChange={handleChange("age")}
           id="age" className="form-control" type="number" />
        </div>
        <div className="form-group">
          <label className="text-secondary bold">Usertype</label>
          <select 
           value={usertype}
           onChange={handleChange("usertype")}
           className="form-control">
            <option value="USER">User</option>
            <option value="INVESTOR">Investor</option>
            <option value="CHARITY">Charity</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-secondary">Email</label>
          <input  
           value={email}
           onChange={handleChange("email")}
          id="email" className="form-control" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-secondary">Password</label>
          <input
           value={password}
           onChange={handleChange("password")}
            id="password" className="form-control" type="password" />
        </div>
        <button type="submit" onClick={onSubmit} className="btn btn-success btn-block submitbtn">Submit</button>
      </form>
    </div>
  </div>
  <div className="d-flex info">
    <p>Already have an account Pls</p> <button className="rbutton" > <Link className="link" to="/">SignIn.</Link> </button> 
   </div>
  </div>
  <Footer/>
  {redirect&& <Navigate to="/" />}
  </div>
   
  )
}

export default Signup