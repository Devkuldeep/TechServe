'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserInquiry = ({ refreshInquiries }) => {
    const [inquiries, setInquiries] = useState([]);
    const [editingInquiry, setEditingInquiry] = useState(null);

    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/inquiries');
                setInquiries(response.data);
            } catch (error) {
                console.error('Error fetching inquiries:', error);
                // Handle error (e.g., show error message to user)
            }
        };
        fetchInquiries();
    }, [refreshInquiries]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/inquiries/${id}`);
            setInquiries(inquiries.filter(inquiry => inquiry._id !== id));
        } catch (error) {
            console.error('Error deleting inquiry:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    const handleEdit = (inquiry) => {
        setEditingInquiry({ ...inquiry });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/inquiries/${editingInquiry._id}`, editingInquiry);
            setInquiries(inquiries.map(i => i._id === editingInquiry._id ? editingInquiry : i));
            setEditingInquiry(null);
        } catch (error) {
            console.error('Error updating inquiry:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    const handleInputChange = (e, field) => {
        setEditingInquiry({ ...editingInquiry, [field]: e.target.value });
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-[#1C3434] mb-6">Project Inquiries</h2>
            {inquiries.map(inquiry => (
                <div key={inquiry._id} className="bg-white shadow-md rounded-lg p-6 mb-4">
                    {editingInquiry && editingInquiry._id === inquiry._id ? (
                        <div>
                            <input
                                value={editingInquiry.firstName}
                                onChange={(e) => handleInputChange(e, 'firstName')}
                                className="w-full mb-2 p-2 border rounded"
                            />
                            <input
                                value={editingInquiry.lastName}
                                onChange={(e) => handleInputChange(e, 'lastName')}
                                className="w-full mb-2 p-2 border rounded"
                            />
                            <input
                                value={editingInquiry.email}
                                onChange={(e) => handleInputChange(e, 'email')}
                                className="w-full mb-2 p-2 border rounded"
                            />
                            <input
                                value={editingInquiry.mobile}
                                onChange={(e) => handleInputChange(e, 'mobile')}
                                className="w-full mb-2 p-2 border rounded"
                            />
                            <input
                                value={editingInquiry.service}
                                onChange={(e) => handleInputChange(e, 'service')}
                                className="w-full mb-2 p-2 border rounded"
                            />
                            <textarea
                                value={editingInquiry.message}
                                onChange={(e) => handleInputChange(e, 'message')}
                                className="w-full mb-2 p-2 border rounded"
                            />
                           <div className='flex justify-end mt-4'>
                           <button onClick={handleUpdate} className='bg-green2 text-black px-4 py-2 rounded hover:bg-darkGreenTextColor hover:text-white  transition duration-300 mr-2'>
                                Update
                            </button>
                            <button onClick={() => setEditingInquiry(null)} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300'>
                                Cancel
                            </button>
                           </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-[#1C3434]">{inquiry.firstName} {inquiry.lastName}</h3>
                                <span className="text-sm text-gray-500">{new Date(inquiry.submittedAt).toLocaleDateString()}</span>
                            </div>
                            <p className="text-gray-700 mb-2">Email: {inquiry.email}</p>
                            <p className="text-gray-700 mb-2">Mobile: {inquiry.mobile}</p>
                            <p className="text-gray-700 mb-2">Service: {inquiry.service}</p>
                            <p className="text-gray-700 mb-4">Message: {inquiry.message}</p>
                            <div className="flex justify-end items-center">
                                <button 
                                    onClick={() => handleEdit(inquiry)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mr-2"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => handleDelete(inquiry._id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserInquiry;
