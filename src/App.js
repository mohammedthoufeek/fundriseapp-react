import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import NoPage from './Component/NoPage/NoPage';
import Signin from './Component/Signin/SignIn';
import Signup from './Component/Signup/Signup';
import Message from './Component/Messages/Messages';
import ListPost from './Component/ListPost/ListPost';
import AddPost from './Component/AddPost/AppPost';
import Post from './Component/Post/Post';
import Profile from './Component/Profile/Profile';
import BankAccount from './Component/Bank-account/BankAccount';
import Transaction from './Component/Transaction/Transaction';



import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Signin />} />
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="message" element={<Message />} />
            <Route path="profile" element={<Profile />} />
            <Route path="bankaccount" element={<BankAccount />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="post" element={<Post />} />
            <Route path="AddPost" element={<AddPost />} />
            <Route path="ListPost" element={<ListPost />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
