import "react";
import { useEffect, useState } from "react";
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
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <>
        <Navbar />
        <Signup />
        <Login />
      </>
    );
  }

  
  return (
    <div>
      <LoggedNav />
      <div className="hero w-full h-[400px] bg-gradient-to-r from-green-300 to-green-200 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-green-300 text-sm md:text-lg lg:text-xl">....</h1>
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mt-5 font-sans">
          Welcome back {auth.currentUser.displayName}
        </h1>
        <h3 className="text-lg md:text-xl lg:text-2xl mt-8 text-opacity-90">
          Small Actions Today Create Big Changes Tomorrow
        </h3>
        <div className="boxes flex flex-wrap gap-8 justify-center mt-12">
          {/* Box 1 */}
          <div className="box1 bg-slate-200 w-full sm:w-72 md:w-80 lg:w-72 h-36 rounded-2xl flex flex-col items-center justify-center">
            <h1 className="text-center font-bold text-3xl">
              <FontAwesomeIcon
                size="2xl"
                icon={faTree}
                style={{ color: "green" }}
              />
              <br />
              156
            </h1>
            <h3 className="text-center">Trees Planted</h3>
          </div>
          {/* Box 2 */}
          <div className="box2 bg-slate-200 w-full sm:w-72 md:w-80 lg:w-72 h-36 rounded-2xl flex flex-col items-center justify-center">
            <h1 className="text-center font-bold text-3xl">
              <FontAwesomeIcon
                size="2xl"
                icon={faCoins}
                style={{ color: "green" }}
              />
              <br />
              2450
            </h1>
            <h3 className="text-center">Points Earned</h3>
          </div>
          {/* Box 3 */}
          <div className="box3 bg-slate-200 w-full sm:w-72 md:w-80 lg:w-72 h-36 rounded-2xl flex flex-col items-center justify-center">
            <h1 className="text-center font-bold text-3xl">
              <FontAwesomeIcon
                size="2xl"
                icon={faMedal}
                style={{ color: "green" }}
              />
              <br />
              Earth Guardian
            </h1>
            <h3 className="text-center">Latest Achievement</h3>
          </div>
        </div>
      </div>
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Homepage;
