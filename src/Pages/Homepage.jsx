import { useEffect, useState } from "react";
import 'react'
import Footer from "../Components/Footer";
import HomeContent from "../PageComponents/HomeContent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Signup from "./Signup";
import Login from "./Login";
import Navbar from "../Components/Navbar";
import LoggedNav from "../Components/LoggedNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faCoins, faMedal } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });
  }, []);

  if (user === null) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <Signup />
          <Login />
        </div>
      </>
    );
  }

  return (
    <div className="bg-gray-100 text-black">
      <LoggedNav />
      {/* Hero Section */}
      <div className="hero w-full h-auto bg-gradient-to-r from-green-300 to-green-200 flex flex-col justify-center items-center text-center py-8 px-4 sm:px-8 lg:px-16">
        <h1 className="text-green-800 text-sm sm:text-lg lg:text-xl tracking-wide">
          EcoRewards
        </h1>
        <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mt-4">
          Welcome back, {auth.currentUser.displayName}!
        </h1>
        <h3 className="text-md sm:text-lg lg:text-xl mt-6 text-gray-700">
          Small Actions Today Create Big Changes Tomorrow
        </h3>
        {/* Info Boxes */}
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {/* Box 1 */}
          <div className="box bg-white shadow-md w-full sm:w-64 lg:w-72 h-36 rounded-xl flex flex-col items-center justify-center border-t-4 border-green-500">
            <FontAwesomeIcon
              icon={faTree}
              size="2x"
              className="text-green-500 mb-2"
            />
            <h1 className="font-bold text-2xl">156</h1>
            <h3 className="text-gray-600 text-sm">Trees Planted</h3>
          </div>
          {/* Box 2 */}
          <div className="box bg-white shadow-md w-full sm:w-64 lg:w-72 h-36 rounded-xl flex flex-col items-center justify-center border-t-4 border-green-500">
            <FontAwesomeIcon
              icon={faCoins}
              size="2x"
              className="text-green-500 mb-2"
            />
            <h1 className="font-bold text-2xl">2450</h1>
            <h3 className="text-gray-600 text-sm">Points Earned</h3>
          </div>
          {/* Box 3 */}
          <div className="box bg-white shadow-md w-full sm:w-64 lg:w-72 h-36 rounded-xl flex flex-col items-center justify-center border-t-4 border-green-500">
            <FontAwesomeIcon
              icon={faMedal}
              size="2x"
              className="text-green-500 mb-2"
            />
            <h1 className="font-bold text-2xl">Earth Guardian</h1>
            <h3 className="text-gray-600 text-sm">Latest Achievement</h3>
          </div>
        </div>
      </div>
      {/* Additional Content */}
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Homepage;
