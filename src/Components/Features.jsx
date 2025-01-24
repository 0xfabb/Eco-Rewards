import "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faHandshake,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
const Features = () => {
  return (
    <div className="mt-16 px-6 md:px-16">
      <h2 className="text-center text-3xl font-bold text-green-600">
        Our Core Features
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="feature-box bg-slate-300 text-blue-900 rounded-2xl p-6">
          <FontAwesomeIcon
            icon={faEarth}
            size="2x"
            className="mx-auto text-green-500"
          />
          <h3 className="text-center mt-4 text-xl font-semibold">
            Learn about Environmental Issues
          </h3>
        </div>
        <div className="feature-box bg-slate-300 text-blue-900 rounded-2xl p-6">
          <FontAwesomeIcon
            icon={faHandshake}
            size="2x"
            className="mx-auto text-green-500"
          />
          <h3 className="text-center mt-4 text-xl font-semibold">
            Share Eco-Friendly Actions
          </h3>
        </div>
        <div className="feature-box bg-slate-300 text-blue-900 rounded-2xl p-6">
          <FontAwesomeIcon
            icon={faMedal}
            size="2x"
            className="mx-auto text-green-500"
          />
          <h3 className="text-center mt-4 text-xl font-semibold">
            Earn Rewards for Contributions
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
