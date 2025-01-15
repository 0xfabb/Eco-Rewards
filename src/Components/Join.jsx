import "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faMedal, faRecycle } from "@fortawesome/free-solid-svg-icons";
const Join = () => {
  return (
    <div className="h-96 w-screen items-center">
      <h1 className="text-green-600 font-bold text-3xl mt-16 text-center ">
        Join Our Conversation
      </h1>
      <div className="boxes flex gap-24 mt-16 ml-24 items-center">
        <div className="joinbox w-96 h-56 bg-neutral-900 rounded-2xl text-green-600">
          <FontAwesomeIcon
            size="xl"
            className="ml-44 mt-9"
            icon={faLeaf}
            style={{ color: "green" }}
          />
          <h2 className="p-3 text-center text-2xl font-semibold">
            Plant Trees
          </h2>
          <p className="ml-9 text-white">
            Upload photos/videos of eco-friendly actions!
          </p>
          <button className="bg-green-700 ml-36 mt-4 text-white font-semibold rounded-lg py-2 px-4">
            Explore
          </button>
        </div>
        <div className="joinbox w-96 h-56 bg-neutral-900 rounded-2xl text-green-600">
          <FontAwesomeIcon
            size="xl"
            className="ml-44 mt-9"
            icon={faRecycle}
            style={{ color: "green" }}
          />
          <h2 className="p-3 text-center text-2xl font-semibold">Go Green</h2>
          <p className="ml-9 text-white">
            Upload photos/videos of eco-friendly actions!
          </p>
          <button className="bg-green-700 ml-36 mt-4 text-white font-semibold rounded-lg   py-2 px-4">
            Explore
          </button>
        </div>
        <div className="joinbox w-96 h-56 bg-neutral-900 rounded-2xl text-green-600">
          <FontAwesomeIcon
            size="xl"
            className="ml-44 mt-9"
            icon={faMedal}
            style={{ color: "green" }}
          />
          <h2 className="p-3 text-center text-2xl font-semibold">
            Your Actions Matter
          </h2>
          <p className="ml-9 text-white">
            Upload photos/videos of eco-friendly actions!
          </p>
          <button className="bg-green-700 ml-36 mt-4 text-white font-semibold rounded-lg   py-2 px-4">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
