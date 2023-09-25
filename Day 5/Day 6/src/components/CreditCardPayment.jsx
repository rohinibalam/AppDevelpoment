// CreditCardPayment.jsx

import React, { useState } from 'react';
import '../assets/css/CreditCardPayment.css';

const CreditCardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (cardNumber.trim() === '' || cardName.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '') {
      alert('Please fill in all the fields.');
      return;
    }

    // Simulate payment processing (you would replace this with actual payment processing)
    setTimeout(() => {
      alert('Payment successful!'); // Simulated success message
    }, 2000);
  };

  return (
    <div className="credit-card-payment-container">
      <h2>Credit Card Payment</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardName">Cardholder Name:</label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={handleCardNameChange}
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="MM/YY"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            placeholder="123"
          />
        </div>
        <button type="submit" className="pay-button">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CreditCardPayment;
