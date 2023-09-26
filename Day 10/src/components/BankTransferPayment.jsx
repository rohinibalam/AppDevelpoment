import React, { useState } from 'react';
import '../assets/css/BankTransferPayment.css'; // Import your CSS file for the Bank Transfer payment method styling

const BankTransferPayment = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePay = () => {
    if (accountNumber.trim() === '' || amount.trim() === '') {
      alert('Please enter both the account number and amount.');
    } else {
      // Handle the bank transfer payment logic here
      alert(`Payment of $${amount} to Account ${accountNumber} is being processed.`);
    }
  };

  return (
    <div className="bank-transfer-payment-container">
      <h1>Bank Transfer Payment</h1>
      <div className="payment-details">
        <label htmlFor="accountNumber">Account Number:</label>
        <input
          type="text"
          id="accountNumber"
          placeholder="Enter account number"
          value={accountNumber}
          onChange={handleAccountNumberChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <button className="pay-button" onClick={handlePay}>
        Pay
      </button>
    </div>
  );
};

export default BankTransferPayment;
