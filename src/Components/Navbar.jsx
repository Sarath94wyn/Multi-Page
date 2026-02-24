import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
  <h1 className="text-xl font-semibold tracking-wide">
    Multipage React App
  </h1>

  <div className="flex gap-8">
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `relative pb-1 transition
         ${
           isActive
             ? "text-yellow-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-400"
             : "text-gray-300 hover:text-white"
         }`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/about"
      className={({ isActive }) =>
        `relative pb-1 transition
         ${
           isActive
             ? "text-yellow-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-400"
             : "text-gray-300 hover:text-white"
         }`
      }
    >
      About
    </NavLink>

    <NavLink
      to="/users"
      className={({ isActive }) =>
        `relative pb-1 transition
         ${
           isActive
             ? "text-yellow-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-400"
             : "text-gray-300 hover:text-white"
         }`
      }
    >
      Users
    </NavLink>
  </div>
</nav>
  );
}

export default Navbar;