import axios from "axios";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const WorkoutDetails = ({ workout, setWorkouts }) => {
  const handleDelete = async (_id) => {
    const response = await axios.delete(`http://localhost:8000/api/workouts/${_id}`);
    if (response.status) {
      toast.success("Workout Deleted Successfully");
      const response = await axios.get("http://localhost:8000/api/workouts");
      if (response.status) {
        setWorkouts(response.data.data);
      }
    }
  };
  return (
    <div className="workout-details">
      <h3>{workout?.title}</h3>
      <p>
        <strong>Load(kg): </strong>
        {workout?.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout?.reps}
      </p>
      <p>{formatDistanceToNow(new Date(workout?.createdAt), { addSuffix: true })}</p>
      <span>
        <FaTrash color="red" onClick={() => handleDelete(workout?._id)} />
      </span>
    </div>
  );
};

export default WorkoutDetails;
