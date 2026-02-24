import { useParams, useNavigate } from "react-router-dom";
import { users } from "../data/Users";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <p className="p-10">User not found</p>;
  }

  return (
    <div className="p-10 max-w-md mx-auto border rounded">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>

      <p className="mb-2"><strong>Name:</strong> {user.name}</p>
      <p className="mb-4"><strong>Email:</strong> {user.email}</p>

      <button
        onClick={() => navigate("/users")}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
      >
        ⬅ Go Back
      </button>
    </div>
  );
}

export default UserDetail;