import React, { useState } from 'react';
import Base from '../Base';
import BankAccountService from '../../Services/BankAccountService';

const BankAccount = () => {
  const [bankaccount, setBankaccount] = useState({
    balance: "",
    accountName: "",
    accountNumber: "",
    cvv: "",
    bankName: ""
  });

  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [addedAccount, setAddedAccount] = useState(null);

  const handleBalanceChange = (e) => {
    setBankaccount({ ...bankaccount, balance: e.target.value });
  }

  const handleAccountNameChange = (e) => {
    setBankaccount({ ...bankaccount, accountName: e.target.value });
  }

  const handleAccountNumberChange = (e) => {
    setBankaccount({ ...bankaccount, accountNumber: e.target.value });
  }

  const handleCvvChange = (e) => {
    setBankaccount({ ...bankaccount, cvv: e.target.value });
  }

  const handleBankNameChange = (e) => {
    setBankaccount({ ...bankaccount, bankName: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bankaccount);
    BankAccountService.createAccount(bankaccount, 2)
      .then((resp) => {
        console.log(resp.data);
        setAddedAccount(resp.data); // Store the added account details
        setMessage("Account added successfully");
        setErrMessage("");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          console.log(err.response.data);
          setErrMessage("Error occurred in the following field: " + JSON.stringify(err.response.data));
        } else {
          console.log(err);
          setErrMessage("An error occurred. Please try again later.");
        }
        setMessage("");
      });
  }

  return (
    <Base>
      <h3>Add new Account:</h3>
      {message && <h3 className="alert alert-success">{message}</h3>}
      {errMessage && <h3 className="alert alert-danger">{errMessage}</h3>}
      {addedAccount && (
        <div>
          <h3>Added Account Details:</h3>
          <p>Balance: {addedAccount.balance}</p>
          <p>Account Name: {addedAccount.accountName}</p>
          <p>Account Number: {addedAccount.accountNumber}</p>
          <p>CVV: {addedAccount.cvv}</p>
          <p>Bank Name: {addedAccount.bankName}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <p>Balance: <input type="text" value={bankaccount.balance} onChange={handleBalanceChange} /></p>
        <p>Account Name: <input type="text" value={bankaccount.accountName} onChange={handleAccountNameChange} /></p>
        <p>Account Number: <input type="text" value={bankaccount.accountNumber} onChange={handleAccountNumberChange} /></p>
        <p>CVV: <input type="text" value={bankaccount.cvv} onChange={handleCvvChange} /></p>
        <p>Bank Name: <input type="text" value={bankaccount.bankName} onChange={handleBankNameChange} /></p>
        <p><button type='submit'>Add Account</button></p>
      </form>
    </Base>
  );
}

export default BankAccount;
