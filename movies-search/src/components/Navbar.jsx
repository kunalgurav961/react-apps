import { Bell, Search } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
    let navigate = useNavigate()
  return (
    <nav className="flex justify-between py-3 px-5 items-center">
      <div className="flex gap-10 items-center">
        <h4>Home</h4>
        <h4>All Movies</h4>
        <h4>Services</h4>
        <h4>Top 10 </h4>
      </div>
      <h1
        onClick={() => navigate("/movies")}
        className="w-[33%] cursor-pointer text-4xl font-bold"
      >
        Movie<span className="text-red-500">Hub</span>
      </h1>

      <div className="flex gap-3 items-center">
        <Search />
        <Bell />
        <div className="flex gap-2 items-center">
          <span>My Profie</span>
          <div className="h-8 w-8 rounded-full border overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src="https://imgs.search.brave.com/wMbh-i3aAMxGN2MZvMeDKXwitM9V4Bj81rGlrf_p4G8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjgy/ODk3ODI1L3Bob3Rv/L2NvbmZpZGVudC1i/dXNpbmVzc3dvbWFu/LW92ZXItZ3JheS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz02/dUYtYVlqMGVySEpz/SXc0UDU0SHNOaDZT/M1RaaUZIMlQzbXd3/V0h0YnZrPQ"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
