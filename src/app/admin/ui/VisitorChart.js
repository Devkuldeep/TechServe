'use client'
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VisitorChart = () => {
  const [visitorData, setVisitorData] = useState({
    totalCount: 0,
    todayVisitCount: { count: 0 },
    monthlyCount: { count: 0 },
    yearlyCount: { count: 0 },
    visitHistory: [],
  });
  const [timeFrame, setTimeFrame] = useState('daily');

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/visit-stats');
        setVisitorData(response.data);
      } catch (error) {
        console.error('Error fetching visitor data:', error);
      }
    };

    fetchVisitorData();
    const interval = setInterval(fetchVisitorData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const getChartData = () => {
    switch (timeFrame) {
      case 'daily':
        return {
          labels: ['Today'],
          data: [visitorData.todayVisitCount.count],
        };
      case 'monthly':
        return {
          labels: visitorData.monthlyCount ? [`${visitorData.monthlyCount.month}/${visitorData.monthlyCount.year}`] : [],
          data: visitorData.monthlyCount ? [visitorData.monthlyCount.count] : [],
        };
      case 'yearly':
        return {
          labels: visitorData.yearlyCount ? [visitorData.yearlyCount.year.toString()] : [],
          data: visitorData.yearlyCount ? [visitorData.yearlyCount.count] : [],
        };
      default:
        return { labels: [], data: [] };
    }
  };

  const chartData = {
    labels: getChartData().labels,
    datasets: [
      {
        label: 'Visitor Count',
        data: getChartData().data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Visitor Count (${timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)})`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-[#1C3434] mb-4">Visitor Statistics</h2>
      <p className="text-lg mb-4">Total Visitor Count: {visitorData.totalCount}</p>
      <p className="text-lg mb-4">Today's Visitor Count: {visitorData.todayVisitCount.count}</p>
      <div className="mb-4">
        <button 
          onClick={() => setTimeFrame('daily')} 
          className={`mr-2 px-4 py-2 rounded ${timeFrame === 'daily' ? 'bg-green2 text-white' : 'bg-gray-200'}`}
        >
          Daily
        </button>
        <button 
          onClick={() => setTimeFrame('monthly')} 
          className={`mr-2 px-4 py-2 rounded ${timeFrame === 'monthly' ? 'bg-green2 text-white' : 'bg-gray-200'}`}
        >
          Monthly
        </button>
        <button 
          onClick={() => setTimeFrame('yearly')} 
          className={`px-4 py-2 rounded ${timeFrame === 'yearly' ? 'bg-green2 text-white' : 'bg-gray-200'}`}
        >
          Yearly
        </button>
      </div>
      <div className="h-64">
        {chartData.labels.length > 0 ? (
          <Bar options={options} data={chartData} />
        ) : (
          <p>No data available for the selected time frame.</p>
        )}
      </div>
    </div>
  );
};

export default VisitorChart;
