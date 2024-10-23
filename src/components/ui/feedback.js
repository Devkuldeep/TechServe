import React, { useState } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      console.log(data);
      setStatus('Feedback submitted successfully!');
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error submitting feedback. Please try again.');
    }
  };

  return (
    <div className="p-4 rounded-md text-[#1C3434] w-1/2 mx-auto">
         <h2 className="text-4xl font-bold mb-12 text-center text-darkGreenTextColor"
        >
          Give Your  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-darkGreenTextColor">  Valuable Feedback</span>
        </h2>
      <h2 className="text-xl px-8 font-bold mb-4 ">Submit Feedback</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-8 rounded-md shadow-xl'>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded shadow-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded shadow-sm"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-[#1C3434] text-white px-4 py-2 rounded hover:bg-[#1C3434] shadow-md">
          Submit Feedback
        </button>
      </form>
      {status && <p className="mt-4 font-bold">{status}</p>}
    </div>
  );
};

export default FeedbackForm;
