import "react";
import '../Components/Hero.css';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  const gotToNewPage=()=>{
    navigate("/Signup");
  }
  return (
    <div className="herosect">
    <div className="bg-cover bg-center h-screen relative text-white flex flex-col items-center justify-center bg-[url('/path-to-your-image.jpg')]">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Be the Change for a Greener Planet
      </h1>
      <h3 className="mt-6 text-2xl md:text-3xl font-bold text-center">
        Join our Community, take action, and earn rewards
      </h3>
      <button
        onClick={gotToNewPage}
        className="mt-8 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full py-2 px-4 md:px-6 md:py-3"
      >
        Get Started
      </button>
    </div>
    </div>
  );
  
};

export default Hero;

