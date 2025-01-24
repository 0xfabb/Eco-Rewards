import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPen,
  faComments,
  faMedal,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const gotToNewPage = () => {
    navigate("/Signup");
  };

  return (
    <div className="bg-[#121212] w-full h-14 flex justify-between items-center px-6">
      <Link
        to="/"
        className="text-white font-bold text-2xl flex items-center space-x-2"
      >
        <FontAwesomeIcon icon={faLeaf} style={{ color: "green" }} size="lg" />
        <span>EcoRewards</span>
      </Link>

      <div className="hidden md:flex gap-6 items-center text-white font-medium">
        <Link to="/" className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </Link>
        <Link to="/signup" className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faPen} />
          <span>Blogs</span>
        </Link>
        <Link to="/signup" className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faComments} />
          <span>Community</span>
        </Link>
        <Link to="/signup" className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faMedal} />
          <span>Rewards</span>
        </Link>
      </div>

      <button
        onClick={gotToNewPage}
        className="bg-green-500 hover:bg-green-700 text-white rounded-full py-2 px-4 md:px-4 md:py-2"
      >
        Sign In
      </button>
    </div>
  );
};

export default Navbar;
