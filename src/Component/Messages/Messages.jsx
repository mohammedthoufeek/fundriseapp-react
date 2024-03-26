import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Base from '../Base'
import  "./Messages.css"
import { getMessages, sendMessage } from '../../Services/MessageService'
const Usermodel = {
  id: 0,
  name: "",
  dob: "",
  address: "",
  phonenumber: "",
  age: 0,
  usertype: "",
  email: "",
  password: ""
};

const Messages = () => {
  const [userdata, setUserdata] = useState({ ...Usermodel });
  const [messageuser, setMessageuser] = useState({ ...Usermodel });
  const [listmessages, setListMessages] = useState([]);

  const [messages,setMessage]=useState({
    userid1:0,
    userid2:0,
    message:""
  })

const {userid1,userid2,message}=messages;

  const handleChange =  (e) => {
    setMessage(prevMessage => ({
      ...prevMessage,
      message: e.target.value
    }));
};

const onSubmit = (event)=>{
  event.preventDefault();
  const { name, value } = event.target;
    setMessage(prevMessage => ({
      ...prevMessage,
      [name]: value
    }));
    console.log(messages);
      sendMessage(messages).then(data => {
      
        if (data==undefined) {
          console.log(data);
        } else {
          console.log(data);
          console.log("messages sent successfully")
          console.log(userdata.id,messageuser.id)
          fetchMessages(userdata.id,messageuser.id);
        }
      })
}


  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData")) || {};
    const messageUserFromLocalStorage = JSON.parse(localStorage.getItem("messageduser")) || {};

    setUserdata(prevData => ({ ...prevData, ...userDataFromLocalStorage }));
    setMessageuser(prevData => ({ ...prevData, ...messageUserFromLocalStorage }));
    setMessage(prevMessage => ({
      ...prevMessage,
      userid1:userDataFromLocalStorage.id,
      userid2: messageUserFromLocalStorage.id
    }));
    fetchMessages(userDataFromLocalStorage.id, messageUserFromLocalStorage.id);
  }, []); 


  const fetchMessages = (userId, messageId) => {
    getMessages(userId, messageId).then(data => {
      
      if (data==undefined) {
        console.log(data);
      } else {
        setListMessages(data.messageList);
      }
    });
  };


  return (
    <Base>
      <div className="user-info-container">
        <h1 className="user-name">To: {messageuser.name}</h1>
        <h6 className="user-type">{messageuser.usertype}</h6>
      </div>

      <div className="message-container">
        {listmessages.length < 1 && <p>No Messages found</p>}
        {listmessages.length > 0 && listmessages.map((list, index) => (
          <div className="message-item" key={index}>
            <div className="username">{list.user.id === userdata.id ? 'Me' : list.userName}</div>
            <div className="message">{list.message}</div>
            <div className="meta-info">
              <span className="date">{list.date}, </span>
              <span className="time">{list.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div class="message-input-container">
    <form>
        <input value={message}
           onChange={handleChange} type="text" id="message" name="message" placeholder="Type your message here..."/>
        <button onClick={onSubmit} className="btn btn-success">Send</button>
    </form>
</div>
    </Base>
  );
};

export default Messages;


