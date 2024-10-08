import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkoutList.css';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/workouts")
    .then(res => res.json())
    .then(res => setWorkouts(res))
  },[])
  const navigate = useNavigate();
  // Fetch workouts from the backend
  const handleEdit = async (id) => {
    navigate("/EditWorkout/"+id)
  };

  // Handle workout deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/workouts/${id}`);
      window.location.reload() // Refresh workouts list after deletion
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  // useEffect(() => {
  //   fetchWorkouts(); // Fetch workouts on component mount
  // }, []);

  return (
    <div className="workout-list">
      <h2>Previous Workouts</h2>

      {workouts.length === 0 ? (
        <p>No workouts found. Start adding some!</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout._id} className="workout-item">
              <div>
                <strong>{workout.type}</strong> - {workout.name}
              </div>
              <div className="workout-actions">
                <button onClick={() => handleEdit(workout._id)}>Edit</button>
                <button onClick={() => handleDelete(workout._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutList;
