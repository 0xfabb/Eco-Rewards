import "react";
import { useEffect , useState } from "react";
import Footer from "../Components/Footer";
import HomeContent from "../PageComponents/HomeContent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Signup from "./Signup";
import Login from "./Login"
import Navbar  from "../Components/Navbar";
import LoggedNav from "../Components/LoggedNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faCoins, faMedal } from "@fortawesome/free-solid-svg-icons";




const Homepage = () => {
  
 

  const [user, setUser] = useState(null);

  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
    if(user){
      setUser(user)
    }else{
      setUser(null)
    }
   })
  }, []);

  if(user === null ){
    return (
      <>
      <Navbar />
      <Signup />
      <Login />
      </>
    )
  }

  return (
    
    <div>
      <LoggedNav />
      <div className="hero w-screen h-[400px] bg-gradient-to-r from-green-300 to-green-200 ...">
        <h1 className="text-green-300">....</h1>
        <h1 className="font-semibold text-[36px] mt-5 font-sans text-center">
          Welcome back {user.email}
        </h1>
        <h3 className="text-center mt-8 text-[28px] font-sans text-opacity-0 ">
          Small Actions Today Create Big Changes Tommorow
        </h3>
        <div className="boxes flex gap-12 ml-72 mt-12">
          <div className="box1 bg-slate-200 w-72 h-36 rounded-2xl">
            <h1 className="text-center font-bold mt-9">
              <FontAwesomeIcon
                size="2xl"
                icon={faTree}
                style={{ color: "green" }}
              />{" "}
              <br />
              156
            </h1>
            <h3 className=" text-center ">Trees Planted</h3>
          </div>
          <div className="box2 bg-slate-200 w-72 h-36 rounded-2xl">
            <h1 className="text-center font-bold mt-9">
              <FontAwesomeIcon
                size="2xl"
                icon={faCoins}
                style={{ color: "green" }}
              />{" "}
              <br />
              2450
            </h1>
            <h3 className=" text-center ">Points Earned</h3>
          </div>
          <div className="box3 bg-slate-200 w-72 h-36 rounded-2xl">
            <h1 className="text-center font-bold mt-9">
              <FontAwesomeIcon
                size="2xl"
                icon={faMedal}
                style={{ color: "green" }}
              />{" "}
              <br />
              Earth Guardian
            </h1>
            <h3 className=" text-center ">Latest Achievement</h3>
          </div>
        </div>
      </div>
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Homepage;
