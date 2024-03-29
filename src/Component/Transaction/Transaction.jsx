import React, { useState } from 'react';
import Base from '../Base';
import TransactionService from '../../Services/TransactionService';
import Post from '../Post/Post';

const Transaction = () => {
  const [transaction, setTransaction] = useState({
    userId: userid, 
    postId: Post.postId,
    amount: ""
  });

  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [userid, setUserId] = useState(0);

  let userDataFromLocalStorage;
  useEffect(() => {
    userDataFromLocalStorage = JSON.parse(localStorage.getItem('userData')) || {};
    setUserId(userDataFromLocalStorage.id);

    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfileById(userDataFromLocalStorage.id);
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleAmountChange = (e) => {
    setTransaction({ ...transaction, amount: e.target.value });
  }

  const submitAmount = (e) => {
    e.preventDefault();
    console.log(transaction);
    TransactionService.addPayment(transaction)
      .then((resp) => {
        console.log(resp.data);
        setMessage("payment added successfully");
        setErrMessage("");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          console.log(err.response.data);
        } else {
          console.log(err);
          setErrMessage("An error occurred. Please try again later.");
        }
        setMessage("");
      });
  }

  return (
    <Base>
      <h3>Transaction Details:</h3>
      <p>
        Amount: <input type="text" value={transaction.amount} onChange={handleAmountChange} />
      </p>
      <p><button onClick={submitAmount}>Submit</button></p>
    </Base>
  );
}

export default Transaction;
