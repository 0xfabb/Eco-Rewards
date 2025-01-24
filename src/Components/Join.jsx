import "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faMedal, faRecycle } from "@fortawesome/free-solid-svg-icons";
const Join = () => {
  return (
    <div className="mt-16 px-6 md:px-16">
      <h2 className="text-center text-3xl font-bold text-green-600">Join Our Movement</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <div className="join-box w-full sm:w-80 bg-neutral-900 text-white rounded-xl p-6">
          <FontAwesomeIcon icon={faLeaf} size="2x" className="mx-auto text-green-500" />
          <h3 className="mt-4 font-semibold text-xl text-center">Plant Trees</h3>
          <p className="mt-2 text-center">Upload photos/videos of eco-friendly actions!</p>
          <button className="bg-green-700 text-white rounded-lg py-2 px-4 mt-4 w-full">Explore</button>
        </div>
        <div className="join-box w-full sm:w-80 bg-neutral-900 text-white rounded-xl p-6">
          <FontAwesomeIcon icon={faRecycle} size="2x" className="mx-auto text-green-500" />
          <h3 className="mt-4 font-semibold text-xl text-center">Go Green</h3>
          <p className="mt-2 text-center">Upload photos/videos of eco-friendly actions!</p>
          <button className="bg-green-700 text-white rounded-lg py-2 px-4 mt-4 w-full">Explore</button>
        </div>
        <div className="join-box w-full sm:w-80 bg-neutral-900 text-white rounded-xl p-6">
          <FontAwesomeIcon icon={faMedal} size="2x" className="mx-auto text-green-500" />
          <h3 className="mt-4 font-semibold text-xl text-center">Earn Rewards</h3>
          <p className="mt-2 text-center">Upload photos/videos of eco-friendly actions!</p>
          <button className="bg-green-700 text-white rounded-lg py-2 px-4 mt-4 w-full">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Join;



