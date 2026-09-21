
import { Link } from "react-router";
export default function About() {
  return (
    <>
      <h1 className="text-2xl text-sky-400">this is about page</h1>
      <Link to="/" className="text-blue-500 hover:underline">
        Go to Home
      </Link>
    </>
  );
}