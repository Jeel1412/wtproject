import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkoutForm = ({ fetchWorkouts, currentWorkout, setCurrentWorkout }) => {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    if (currentWorkout) {
      setType(currentWorkout.type);
      setDuration(currentWorkout.duration);
    }
  }, [currentWorkout]);  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentWorkout) {
      // Update workout
      axios.put(`http://localhost:5000/api/workouts/${currentWorkout._id}`, { type, duration })
        .then(() => {
          fetchWorkouts();
          setCurrentWorkout(null);
        })
        .catch(error => console.error('Error updating workout', error));
    } else {
      // Add new workout
      axios.post('http://localhost:5000/api/workouts', { type, duration })
        .then(() => fetchWorkouts())
        .catch(error => console.error('Error adding workout', error));
    }
    setType('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Workout Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (in minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <button type="submit">
        {currentWorkout ? 'Update Workout' : 'Add Workout'}
      </button>
    </form>
  );
};

export default WorkoutForm;
