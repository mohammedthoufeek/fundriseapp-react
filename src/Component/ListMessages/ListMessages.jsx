import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Base from '../Base'
import { getMessageUsers } from '../../Services/MessageService'
import { getProfile } from '../../Services/UserService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom'
import "./ListMessages.css"
const ListMessages = () => {
  const [users,setUsers]=useState([])
  
  const [navigate,setNavigate]=useState(false)
  const loadAllDatas = ( id)=>{
    getMessageUsers(id).then(data=>{
      console.log({data});
      if(data.error){
       console.log(data.error)
      }else{
      
        setUsers(data);
        console.log("users",users)
        
      }
    })}
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
      const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData")) || {};
      loadAllDatas( userDataFromLocalStorage.id);
    },[]);

  return (
    <Base>
    <div class="listbox">
<div>
    <h5>Messages</h5>
   {users.length<1 && <p >No Messages found</p>}
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
</div>
{navigate && <Navigate to="/message" />}
    </Base>
  )
}

export default ListMessages