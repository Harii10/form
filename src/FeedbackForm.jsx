import React, { useState } from 'react';
import './App.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setConfirmation('Thank you for your feedback!');

    const newFeedback = { name, email, message };
    setFeedbackList([...feedbackList, newFeedback]);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2 className="form-title">Feedback Form</h2>
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Enter your name"
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input"
            placeholder="Enter your feedback"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {confirmation && <p className="confirmation-message">{confirmation}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {feedbackList.length > 0 && (
        <div className="feedback-list">
          <h3>Submitted Feedback</h3>
          <ul>
            {feedbackList.map((feedback, index) => (
              <li key={index} className="feedback-item">
                <strong>{feedback.name}:</strong> {feedback.message} <em>({feedback.email})</em>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
