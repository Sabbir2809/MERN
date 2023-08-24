import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const HomePage = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/workouts");
        if (response.status) {
          setWorkouts(response.data.data);
        }
      } catch (error) {
        toast.error(error.response.data.error);
      }
    })();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} setWorkouts={setWorkouts} />
          ))}
      </div>
      <WorkoutForm setWorkouts={setWorkouts} />
    </div>
  );
};

export default HomePage;
