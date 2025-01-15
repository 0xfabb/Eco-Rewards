import "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faHouse,
  faLeaf,
  faMedal,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const gotToNewPage = () => {
    navigate("/Signup");
  };
  return (
    <div className="overflow-hidden ">
      <div className="bg flex justify-between bg-#121212  ml-12  overflow-hidden w-[1440px] h-14">
        <Link to="/">
          <div className="logo cursor-pointer text-white font-bold text-2xl text-left mt-2">
            <FontAwesomeIcon
              className="mt-0.5"
              icon={faLeaf}
              style={{ color: "green" }}
              size="lg"
            />{" "}
            EcoRewards{" "}
          </div>
        </Link>
        <div className=" flex">
          <ul className="flex gap-3 p-4 text-white font-medium text-sm  ">
            <FontAwesomeIcon
              className="mt-1"
              icon={faHouse}
              style={{ color: "white" }}
            />
            <Link to="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <FontAwesomeIcon
              className="mt-1"
              icon={faPen}
              style={{ color: "white" }}
            />
            <Link to="/signup">
              <li className="cursor-pointer">Blogs</li>
            </Link>
            <FontAwesomeIcon
              className="mt-1"
              icon={faComments}
              style={{ color: "white" }}
            />
            <Link to="/signup">
              <li className="cursor-pointer">Community</li>
            </Link>
            <FontAwesomeIcon
              className="mt-1"
              icon={faMedal}
              style={{ color: "white" }}
            />
            <Link to="/signup">
              <li className="cursor-pointer">Rewards</li>
            </Link>
          </ul>
          <button
            onClick={() => gotToNewPage()}
            className="bg-green-500 hover:bg-green-700 py-1  text-white m-3 rounded-full px-3"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
