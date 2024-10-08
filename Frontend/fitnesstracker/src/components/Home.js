import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to the Fitness Tracker</h1>
        <p>Your personal assistant for tracking and managing your workouts.</p>
      </header>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>📅 Track your daily workouts and activities</li>
          <li>💪 Monitor your progress over time</li>
          <li>📝 Add, update, and delete workout sessions</li>
          <li>📊 View workout history with statistics and charts</li>
        </ul>
      </section>

      <section className="navigation">
        <h2>Get Started</h2>
        <div className="nav-buttons">
          <Link to="/WorkoutList" className="btn">View Workouts</Link>
          <Link to="/AddWorkout" className="btn">Add New Workout</Link>
          <Link to="/ProgressTracker" className="btn">Track Progress</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
