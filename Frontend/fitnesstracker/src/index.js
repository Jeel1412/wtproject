import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddWorkout from './components/AddWorkout';
import HomePage from './components/Home';
import ProgressTracker from './components/ProgressTracker';
import WorkoutList from './components/WorkoutList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/workoutlist" element={<WorkoutList/>}/>
          <Route path="/ProgressTracker" element={<ProgressTracker/>}/>
          <Route path="/AddWorkout" element={<AddWorkout/>}/>
          <Route path="/EditWorkout/:id" element={<AddWorkout/>}/>

        </Routes>
        </BrowserRouter>
      </>
)



