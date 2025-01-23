import { useState } from "react";
import "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faMedal,
  faHome,
  faUpload,
  faBell,
  faPen,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LoggedNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar text-black bg-white flex justify-between items-center px-4 py-2 shadow-md sticky w-full z-50">
        {/* Logo Section */}
        <div className="navbar-left flex items-center">
          <Link to="/home">
            <span className="logo text-2xl font-bold text-green-600">EcoRewards</span>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-2xl md:hidden text-green-600 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Links */}
        <ul
          className={`nav-links flex-col md:flex-row md:flex items-center gap-6 absolute md:static bg-white w-full md:w-auto left-0 md:justify-end md:gap-8 px-6 md:px-0 py-6 md:py-0 transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } md:translate-y-0 transition-transform duration-300 top-0 h-screen md:h-auto overflow-y-auto`}
        >
          {/* Close Button for Mobile Menu */}
          <button
            className="text-xl text-green-600 self-end md:hidden mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <li className="text-lg">
            <Link
              to="/home"
              className="hover:text-green-600 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="/community"
              className="hover:text-green-600 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faComments} /> Community
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="/rewards"
              className="hover:text-green-600 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faMedal} /> Rewards
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="/blogs"
              className="hover:text-green-600 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faPen} /> Blog
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="/upload"
              className="hover:text-green-600 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faUpload} /> Upload
            </Link>
          </li>
        </ul>

        {/* Right Side (Notifications and Profile) */}
        <div className="navbar-right flex items-center gap-4">
          <FontAwesomeIcon className="text-xl text-gray-600" icon={faBell} />
          <div
            className="profile relative flex items-center gap-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FontAwesomeIcon className="text-xl text-gray-600" icon={faUser} />
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
