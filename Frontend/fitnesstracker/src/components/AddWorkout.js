// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./AddWorkout.css";

// const AddWorkout = () => {
//   // State for form data
//   const [workoutData, setWorkoutData] = useState({
//     name: "",
//     duration: "",
//     date: "",
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/workouts/" + id)
//       .then((res) => res.json())
//       .then((res) => setWorkoutData(res));
//   });
//   // State for handling messages (success/error)
//   const [message, setMessage] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setWorkoutData({
//       ...workoutData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!workoutData.name || !workoutData.duration || !workoutData.date) {
//       setMessage("Please fill all fields");
//       return;
//     }

//     // Submit the workout data to the backend
//     try {
//       // await axios.post('http://localhost:5000/api/workouts', workoutData);
//       // setMessage('Workout added successfully!');

//       if (id) {
//         fetch("http://localhost:5000/api/workouts/"+id , {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(workoutData),
//         })
//         .then(res => res.json())
//         .then(res => console.log(res))
//       }
//       else {
//         fetch("http://localhost:5000/api/workouts", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json", // Specifies the content type as JSON
//           },
//           body: JSON.stringify(workoutData),
//         })
//           .then((res) => res.json())
//           .then((res) => console.log(res));
//       }
//       // Reset form
//       setWorkoutData({
//         type: "",
//         duration: "",
//         date: "",
//       });
//     } catch (error) {
//       console.error("Error adding workout:", error);
//       setMessage("Error adding workout, please try again.");
//     }
//   };

//   return (
//     <div className="add-workout">
//       <h2>Add New Workout</h2>

//       {message && <p className="message">{message}</p>}

//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="type">Workout Type</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={workoutData.name}
//             onChange={handleChange}
//             placeholder="E.g., Running, Cycling"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="duration">Duration (minutes)</label>
//           <input
//             type="number"
//             id="duration"
//             name="duration"
//             value={workoutData.duration}
//             onChange={handleChange}
//             placeholder="E.g., 45"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="date">Date</label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={workoutData.date}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="submit-btn">
//           Add Workout
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddWorkout;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AddWorkout.css";

const AddWorkout = () => {
  // State for form data
  const [workoutData, setWorkoutData] = useState({
    name: "",
    duration: "",
    date: "",
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch("http://localhost:5000/api/workouts/" + id)
        .then((res) => res.json())
        .then((res) => setWorkoutData(res))
        .catch((err) => console.error("Failed to fetch workout:", err));
    }
  }, [id]); // Run this effect only when `id` changes

  // State for handling messages (success/error)
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData({
      ...workoutData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!workoutData.name || !workoutData.duration || !workoutData.date) {
      setMessage("Please fill all fields");
      return;
    }

    // Submit the workout data to the backend
    try {
      const url = id
        ? `http://localhost:5000/api/workouts/${id}`
        : "http://localhost:5000/api/workouts";
      const method = id ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workoutData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setMessage(id ? "Workout updated successfully!" : "Workout added successfully!");
        // Reset form after success
        setWorkoutData({
          name: "",
          duration: "",
          date: "",
        });
      } else {
        setMessage("Error saving workout. Please try again.");
      }
    } catch (error) {
      console.error("Error adding/updating workout:", error);
      setMessage("Error adding workout, please try again.");
    }
  };

  return (
    <div className="add-workout">
      <h2>{id ? "Update Workout" : "Add New Workout"}</h2>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Workout Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={workoutData.name}
            onChange={handleChange}
            placeholder="E.g., Running, Cycling"
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration (minutes)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={workoutData.duration}
            onChange={handleChange}
            placeholder="E.g., 45"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={workoutData.date}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          {id ? "Update Workout" : "Add Workout"}
        </button>
      </form>
    </div>
  );
};

export default AddWorkout;
