import React from 'react'
import "./Signin.css"
import { Link, Navigate , useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import { useState } from 'react'
import { signin } from '../../Services/UserService'

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
    didRedirect: false,
  });
  const {  email, password, error, success, loading, didRedirect } = values;
  const handleChange = (name)=>
    (event)=>{
      setValues({ ...values, error: false, [name]: event.target.value });
    };


  
const onSubmit=(event)=> {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        console.log("DATA", data);
        setValues({ ...values, data,didRedirect:true});
          localStorage.setItem("userData",data)
        }).catch((e)=> console.log(e));
  };


  return (
    <>
<div className='container-fluid'>
    <div className='jumbotron   text-center' style={{color: "#31326e"}}>
        <h1 >FundRaise App</h1>
        <p className='lead'>Welcome To FundRaise App</p>
        <p className='lead'>LOGIN PAGE </p>
    </div>
   

 </div>
<div className="row ">
    <div className="col-md-6 offset-sm-3 text-left">
      <form >
        <div className="form-group">
          <label htmlFor="email" className="text-secondary fieldName">Email</label>
          <input value={email}
                onChange={handleChange("email")} id="email" className="form-control" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-secondary fieldName">Password</label>
          <input value={password}
                onChange={handleChange("password")} id="password" className="form-control" type="password" />
        </div>
        <button type="submit" onClick={onSubmit} className="btn btn-success btn-block submitbtn">Submit</button>
      </form>
    </div>   

  </div>
  <div className="d-flex info">
   <p>Don't have an account Pls</p> <button class="rbutton" > <Link to="/signup">Signup now.</Link></button> 
  </div>
  <Footer/>
  {didRedirect&& <Navigate to="/home" />}
  </>
 
  )
}

export default SignIn