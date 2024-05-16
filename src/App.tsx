import { Link } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
      <h1>Hey ich bin Meggle</h1>
      <Link to="/details" className="button" role="button" tabIndex={0}>
        <p>Details</p>
      </Link>
    </div>
  );
}

export default App;
