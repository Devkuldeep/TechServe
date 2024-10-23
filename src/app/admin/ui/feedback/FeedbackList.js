'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackList = ({ refreshFeedbacks }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [editingFeedback, setEditingFeedback] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/feedback');
                setFeedbacks(response.data);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
                // Handle error (e.g., show error message to user)
            }
        };
        fetchFeedbacks();
    }, [refreshFeedbacks]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/feedback/${id}`);
            setFeedbacks(feedbacks.filter(feedback => feedback._id !== id));
        } catch (error) {
            console.error('Error deleting feedback:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    const handleEdit = (feedback) => {
        setEditingFeedback({ ...feedback });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/feedback/${editingFeedback._id}`, editingFeedback);
            setFeedbacks(feedbacks.map(f => f._id === editingFeedback._id ? editingFeedback : f));
            setEditingFeedback(null);
        } catch (error) {
            console.error('Error updating feedback:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    const handleInputChange = (e, field) => {
        setEditingFeedback({ ...editingFeedback, [field]: e.target.value });
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg"
        >
            <h2 className="text-4xl font-bold text-[#1C3434] mb-8">Feedbacks</h2>
            <AnimatePresence>
                {feedbacks.map(feedback => (
                    <motion.div 
                        key={feedback._id} 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white shadow-md rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        {editingFeedback && editingFeedback._id === feedback._id ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <input
                                    value={editingFeedback.name}
                                    onChange={(e) => handleInputChange(e, 'name')}
                                    className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green2"
                                    placeholder="Name"
                                />
                                <textarea
                                    value={editingFeedback.message}
                                    onChange={(e) => handleInputChange(e, 'message')}
                                    className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green2"
                                    placeholder="Message"
                                    rows="4"
                                />
                                <input
                                    value={editingFeedback.email}
                                    onChange={(e) => handleInputChange(e, 'email')}
                                    className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green2"
                                    placeholder="Email"
                                />
                               <div className='flex justify-end mt-4'>
                               <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleUpdate} 
                                    className='bg-green2 text-black px-6 py-2 rounded-lg hover:bg-darkGreenTextColor hover:text-white transition duration-300 mr-4'
                                >
                                    Update
                                </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setEditingFeedback(null)} 
                                    className='bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300'
                                >
                                    Cancel
                                </motion.button>
                               </div>
                            </motion.div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-semibold text-[#1C3434]">{feedback.name}</h3>
                                    <span className="text-sm text-gray-500">{new Date(feedback.createdAt).toLocaleDateString()}</span>
                                </div>
                                <p className="text-gray-700 mb-4 text-lg">{feedback.message}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{feedback.email}</span>
                                    <div>
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleEdit(feedback)}
                                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mr-4"
                                        >
                                            Edit
                                        </motion.button>
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleDelete(feedback._id)}
                                            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                                        >
                                            Delete
                                        </motion.button>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default FeedbackList;
