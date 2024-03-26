import React from 'react'
import ListPost from '../ListPost/ListPost'
import Base from '../Base'
import { getCharity, getInvestors, getProfile, getUsers } from '../../Services/UserService'
import { useState } from 'react'
import { useEffect } from 'react'
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faenvelope } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom'
const Home = () => {
  const [users,setUsers]=useState([])
  const [investors,setInvestors]=useState([])
  const [charity,setCharity]=useState([])
  const [navigate,setNavigate]=useState(false)
 const loadAllDatas = ()=>{
   getUsers().then(data=>{
     console.log({data});
     if(data.error){
      console.log(data.error)
     }else{
     
       setUsers(data);
       console.log("users",users)
       
     }
   })

   getInvestors().then(data=>{
    console.log({data});
    if(data.error){
     console.log(data.error)
    }else{
      
      setInvestors(data);
      console.log("investors",investors)
     
    }
  })

  getCharity().then(data=>{
    console.log({data});
    if(data.error){
     console.log(data.error)
    }else{
      
      setCharity(data);
      console.log(charity)
    }
  })
 }
const onClicking=(id)=>{
  getProfile(id).then(data=>{
    console.log({data});
    if(data.error){
     
     console.log(data.error)
    }else{  
      localStorage.setItem("messageduser",JSON.stringify(data));
      console.log(data);
      setNavigate(true)
      
    }
  })
}
 useEffect(()=>{
   loadAllDatas();
 },[]);
  return (
    <div>
      <Base>
      <div class="users-list">
      <div>
                <h5>Users List</h5>
                {users.length<1 && <p >No Users found</p>}
                {users.length>1 && users.map((user,index)=>{
            return(
                <div  class="boxx">
                    <div  class="list" >
                    <p>{user.name}</p>
                    <button onClick={() => onClicking(user.id)} className="rbutton">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                    </div>
                </div>
            )})}
            </div>
            <div>
                <h5>Investors List</h5>
                {investors.length<1 && <p >No  Investors</p>}
                {investors.length>1 && investors.map((investor,index)=>{
            return(
                <div  class="boxx">
                    <div  class="list" >
                    <p>{investor.name}</p>
                    <button onClick={() => onClicking(investor.id)} class="rbutton" >
                    <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                    </div>
                </div>
            )})}
            </div>
            <div>
                <h5>Charity List</h5>
                {charity.length<1 && <p >No Charities found</p>}
                {charity.length>1 && charity.map((charityu,index)=>{
            return(
                <div  class="boxx">
                    <div  class="list" >
                    <p>{charityu.name}</p>
                    <button onClick={() => onClicking(charityu.id)} class="rbutton" >
                    <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                    </div>
                </div>
            )})}
            </div>
        </div>
        {navigate && <Navigate to="/message" />}
      <ListPost/>
      </Base>
      </div>
  )
}

export default Home