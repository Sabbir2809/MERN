import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

const WorkoutForm = ({ setWorkouts }) => {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    title: "",
    load: "",
    reps: "",
  });

  const handleOnchange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/workouts", inputs);
      if (response.status) {
        setInputs({
          title: "",
          load: "",
          reps: "",
        });
        toast.success("Workout Added Successfully");
        const response = await axios.get("http://localhost:8000/api/workouts");
        if (response.status) {
          setWorkouts(response.data.data);
        }
      }
    } catch (error) {
      toast.error(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <form className="create" onSubmit={handleOnSubmit}>
      <h3>Add a New Workout</h3>
      <label htmlFor="title">Exercise Title: </label>
      <input
        type="text"
        name="title"
        value={inputs.title}
        onChange={handleOnchange}
        id="title"
        placeholder="Exercise Name"
      />
      <label htmlFor="load">Load (in kg): </label>
      <input
        type="number"
        name="load"
        value={inputs.load}
        onChange={handleOnchange}
        id="load"
        placeholder="Load in kg"
      />
      <label htmlFor="reps">Reps: </label>
      <input
        type="number"
        name="reps"
        value={inputs.reps}
        onChange={handleOnchange}
        id="reps"
        placeholder="Reps"
      />
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
