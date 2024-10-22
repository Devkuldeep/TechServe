'use client'
import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ refreshFeedbacks }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/feedback', formData);
        refreshFeedbacks(); // Trigger refresh
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-[#1C3434] mb-6">Submit Feedback</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1C3434] focus:ring focus:ring-[#1C3434] focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1C3434] focus:ring focus:ring-[#1C3434] focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        placeholder="Your feedback message"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows="4"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1C3434] focus:ring focus:ring-[#1C3434] focus:ring-opacity-50"
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1C3434] hover:bg-[#2A4A4A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C3434]"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
