import {
  faHeart,
  faLeaf,
  faMotorcycle,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react";

const HomeContent = () => {
  const highlights = [
    {
      id: 1,
      message: "Just planted my 50th tree! 🌳 #GreenFuture",
      time: "2h ago",
      likes: 24,
    },
    {
      id: 2,
      message: "Started composting today! Any tips? 🌱",
      time: "4h ago",
      likes: 18,
    },
    {
      id: 3,
      message: "Beach cleanup complete! Collected 15kg plastic 🏖️",
      time: "6h ago",
      likes: 32,
    },
  ];

  return (
    <div>
      <h1 className=" text-green-300 font-bold font-sans text-left ml-20 text-[28px] mt-12  ">
        Active Challenges
      </h1>
      <div className="active-challenges flex ml-28 gap-16">
        <div className="ch-1 bg-neutral-400 w-96 p-3 mt-16 h-44 rounded-xl">
          <div className="icons flex justify-between">
            <FontAwesomeIcon
              size="xl"
              icon={faMotorcycle}
              className=" p-2"
              style={{ color: "green" }}
            />
            <h3 className="bg-green-300 m-1 rounded-full px-1.5 text-green-800 ">
              7 days left
            </h3>
          </div>
          <h1 className="mt-2 ml-1.5 font-bold font-sans">
            Zero Emmision Week
          </h1>
          <h4 className="mt-2 ml-1.5">
            Use eco-fiendly transporataion for a week.
          </h4>
          <button className="bg-green-700 p- text-white w-full rounded-lg mt-4 p-1">
            Join Challenge
          </button>
        </div>
        <div className="ch-1 bg-neutral-400 w-96 p-2 mt-16 h-44 rounded-xl">
          <div className="icons flex justify-between">
            <FontAwesomeIcon
              size="xl"
              icon={faRecycle}
              className="p-2"
              style={{ color: "green" }}
            />
            <h3 className="bg-green-300 m-1 rounded-full px-1.5 text-green-800 ">
              15 days left
            </h3>
          </div>
          <h1 className="mt-2 ml-1.5 font-bold font-sans">
            Plastic Free Month
          </h1>
          <h4 className="mt-2 ml-1.5">
            Eliminate Single use plastic from your life
          </h4>
          <button className="bg-green-700 p- text-white w-full rounded-lg mt-4 p-1">
            Join Challenge
          </button>
        </div>
        <div className="ch-1 bg-neutral-400 w-96 p-2 mt-16 h-44 rounded-xl">
          <div className="icons flex justify-between">
            <FontAwesomeIcon
              size="xl"
              icon={faLeaf}
              className=" p-2"
              style={{ color: "green" }}
            />
            <h3 className="bg-green-300 m-1 rounded-full px-1.5 text-green-800 ">
              30 days left
            </h3>
          </div>
          <h1 className="mt-2 ml-1.5 font-bold font-sans">Community Garden</h1>
          <h4 className="mt-2 ml-1.5">Start your own vegetable garden</h4>
          <button className="bg-green-700 p- text-white w-full rounded-lg mt-4 p-1">
            Join Challenge
          </button>
        </div>
      </div>
      <section className="mb-8">
        <h1 className=" text-green-300 font-bold font-sans text-left ml-16 text-[28px] mt-12  ">
          Community Highlights
        </h1>

        <div className="grid grid-cols-1 ml-72 mt-16 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              <p className="text-gray-700 mb-4">{highlight.message}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{highlight.time}</span>
                <span className="flex items-center space-x-1">
                  <FontAwesomeIcon size="lg" icon={faHeart} />
                  <span>{highlight.likes}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
