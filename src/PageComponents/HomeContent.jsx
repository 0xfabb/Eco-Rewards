import {
  faHeart,
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
    <div className="px-4 sm:px-8 lg:px-16 bg-gray-100 min-h-screen -mt-4">

      {/* Active Challenges */}
      <section className="mt-12 pt-3">
        <h1 className="text-green-800 font-bold text-xl text-center">
          Active Challenges
        </h1>
        <div className="flex flex-col gap-6 mt-6">
          {/* Challenge Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <FontAwesomeIcon
                icon={faMotorcycle}
                size="lg"
                className="text-green-600"
              />
              <span className="bg-green-300 text-green-800 text-xs px-2 py-1 rounded-full">
                7 days left
              </span>
            </div>
            <h2 className="text-lg font-semibold mt-4">Zero Emission Week</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Use eco-friendly transportation for a week.
            </p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg">
              Join Challenge
            </button>
          </div>

          {/* Additional Challenge Cards */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <FontAwesomeIcon
                icon={faRecycle}
                size="lg"
                className="text-green-600"
              />
              <span className="bg-green-300 text-green-800 text-xs px-2 py-1 rounded-full">
                15 days left
              </span>
            </div>
            <h2 className="text-lg font-semibold mt-4">Plastic Free Month</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Eliminate single-use plastic from your life.
            </p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg">
              Join Challenge
            </button>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="mt-12">
        <h1 className="text-green-800 font-bold text-xl text-center">
          Community Highlights
        </h1>
        <div className="grid grid-cols-1 gap-4 mt-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <p className="text-gray-700 mb-2">{highlight.message}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{highlight.time}</span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faHeart} />
                  {highlight.likes}
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
