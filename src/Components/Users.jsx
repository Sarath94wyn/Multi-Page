import { Link } from "react-router-dom";
import { users } from "../data/Users";

function Users() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Users List</h1>

      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 border rounded hover:bg-gray-100"
          >
            <Link
              to={`/users/${user.id}`}
              className="text-blue-500 font-medium"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;