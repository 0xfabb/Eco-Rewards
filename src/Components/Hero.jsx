import "react";
import '../Components/Hero.css';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  const gotToNewPage=()=>{
    navigate("/Signup");
  }
  return (
    
    <div className="overflow-hidden">
      <div className="herosect overflow-hidden w-screen h-1/3 text-on-image ">
        <h1 className="text-center mt-16 text-white font-bold text-[64px]">
          Be the Change for a Greener Planet
        </h1>
        <h3 className="text-center mt-10 text-[28px] text-white font-bold">
          Join our Community, take action, and earn rewards
        </h3>
        <button onClick={() => gotToNewPage()} className="bg-green-500 text-black mt-9 hover:bg-green-400 hover:text-white ml-[700px] font-semibold rounded-full px-5 py-3 ">Get Started </button>
      </div>
    </div>
  );
};

export default Hero;
