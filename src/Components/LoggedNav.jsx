import "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faMedal,
  faHome,
  faUpload,
  faBell,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";





const LoggedNav = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <nav className="navbar text-black bg-white flex justify-between ">
        <div className="navbar-left flex gap-16 mt-4 mb-4 ml-2">
          <Link to="/home">
            <span className="logo text-2xl font-bold">EcoRewards</span>
          </Link>
          <ul className="nav-Links flex m-1  gap-8">
            <li>
              <Link to="/home">
                <FontAwesomeIcon icon={faHome} style={{ color: "green" }} />{" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/Community">
                <FontAwesomeIcon icon={faComments} /> Community
              </Link>
            </li>
            <li>
              <Link to="/rewards">
                <FontAwesomeIcon icon={faMedal} /> Rewards
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                <FontAwesomeIcon icon={faPen} /> Blog
              </Link>
            </li>
            <li>
              <Link to="/upload">
                <FontAwesomeIcon icon={faUpload} /> Upload
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right flex mt-5 gap-2 mb-2">
          <FontAwesomeIcon className="mt-1" icon={faBell} />
          <div
            className="profile relative flex gap-3 mt-1 ml-2 mr-4 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown
          >
            <FontAwesomeIcon className="mr-4" icon={faUser} />
            {showDropdown && (
              <div className="dropdown absolute top-10 right-0 bg-white shadow-md rounded-md w-32">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default LoggedNav;
