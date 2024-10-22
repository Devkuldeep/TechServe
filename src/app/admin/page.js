import React from 'react';
import FeedbackForm from './ui/feedback/FeedbackForm';
import FeedbackList from './ui/feedback/FeedbackList';
import VisitorChart from './ui/VisitorChart';
import UserInquiry from './ui/inquiry/userInquiry';
const AdminPanel = () => (
    <div className='p-20'>
        <h1 className='text-4xl font-bold text-center mb-8'>Admin Panel</h1>
      {/* <FeedbackForm /> */}
      <FeedbackList />
      <UserInquiry />
      <VisitorChart />

    </div>
);

export default AdminPanel;
