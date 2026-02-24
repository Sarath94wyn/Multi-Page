import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">About This App</h1>

      <p className="text-gray-600 mb-6">
        This application demonstrates React routing, navigation,
        and dynamic URL parameters using Tailwind CSS.
      </p>

      <Link
        to="/"
        className="text-blue-500 hover:underline"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default About;