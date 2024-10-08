import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import './ProgressTracker.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProgressTracker = () => {
  // Sample data for workouts per week
  const data = {
    labels: ['29/07', '05/08', '12/08', '19/08', '26/08', '02/09', '09/09', '16/09', '23/09'],
    datasets: [
      {
        label: 'Workouts per week',
        data: [7, 2, 6, 2, 1, 3, 5, 6, 4], // Number of workouts per week
        backgroundColor: 'rgba(138, 43, 226, 0.7)', // purple color
        borderColor: 'rgba(138, 43, 226, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <div className="progress-tracker">
      <header>
        <div className="profile-section">
          <div className="profile-info">
            <h2>Progress Tracker</h2>
          </div>
          <div className="settings-icon">
            <i className="fas fa-cog"></i> {/* FontAwesome icon */}
          </div>
        </div>
      </header>

      <div className="dashboard">
        <h3>Dashboard</h3>
        <div className="chart-container">
          <Bar data={data} options={options} />
        </div>
      </div>

      <footer>
        <nav className="bottom-nav">
          <i className="fas fa-user"></i>
          <i className="fas fa-history"></i>
          <i className="fas fa-plus-circle"></i>
          <i className="fas fa-dumbbell"></i>
          <i className="fas fa-ruler"></i>
        </nav>
      </footer>
    </div>
  );
};

export default ProgressTracker;
