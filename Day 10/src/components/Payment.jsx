import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/css/Payment.css';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handlePaymentSelect = (paymentMode) => {
    setSelectedPayment(paymentMode);
  };

  const handleProceed = () => {
    if (selectedPayment === 'credit_card') {
      // Navigate to the CreditCardPayment page
      navigate('/CreditCardPayment');
    } else if (selectedPayment === 'bank_transfer') {
      // Navigate to the BankTransferPayment page
      navigate('/BankTransferPayment');
    } else if (selectedPayment !== '') {
      // Handle payment processing logic for other payment methods here
      alert(`Selected Payment Method: ${selectedPayment}`);
    } else {
      alert('Please select a payment method.');
    }
  };
  

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <div className="payment-options">
        <div
          className={`payment-option ${
            selectedPayment === 'credit_card' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentSelect('credit_card')}
        >
          <i className="fa fa-credit-card"></i>
          <span>Credit Card</span>
        </div>
        
        <div
          className={`payment-option ${
            selectedPayment === 'bank_transfer' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentSelect('bank_transfer')}
        >
          <i className="fa fa-university"></i>
          <span>Bank Transfer</span>
        </div>
      </div>
      <button className="proceed-button" onClick={handleProceed}>
        Proceed
      </button>
    </div>
  );
};

export default Payment;
