import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="alert alert-warning text-center" role="alert">
      <h1>Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>
        <Link to="/" className="link-success">
          Go To Home Page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
