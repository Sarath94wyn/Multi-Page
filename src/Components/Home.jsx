import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome 👋</h1>
      <p className="mb-6 text-gray-600">
        This is a multi-page React application using React Router and Tailwind CSS.
      </p>

      <div className="space-x-4">
        <Link
          to="/about"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          About
        </Link>

        <Link
          to="/users"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Users
        </Link>
      </div>
    </div>
  );
}

export default Home;