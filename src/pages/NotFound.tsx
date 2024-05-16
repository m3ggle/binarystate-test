import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
      <h1>Du hast dich sichtlich verlaufen.</h1>
      <Link to="/" className="button" role="button" tabIndex={0}>
        <p>Zurück zur Homepage</p>
      </Link>
    </div>
  );
};

export default NotFound;
