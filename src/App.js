import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import NoPage from './Component/NoPage/NoPage';
import SignIn from './Component/Signin/SignIn';
import Signup from './Component/Signup/Signup';
import Message from './Component/Messages/Messages';
import Post from './Component/Post/Post';
import UpdatePost from './Component/UpdatePost/UpdatePost';
import Profile from './Component/Profile/Profile';
import BankAccount from './Component/Bank-account/BankAccount';
import Transaction from './Component/Transaction/Transaction';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import AddPost from './Component/AddPost/AddPost';
import Notification from './Component/Notification/Notification';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/home" element={<Home />}  />
            <Route path="/message" element={<Message />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bankaccount" element={<BankAccount />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/notification" element={<Notification />} />
            <Route path='/updatepost/:postId' element={<UpdatePost/>}/>
            {/* <Route path="ListPost" element={<ListPost />} /> */}
            {/* <Route path="*" element={<NoPage />} />  */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
