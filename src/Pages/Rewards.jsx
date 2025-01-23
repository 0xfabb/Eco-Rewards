import 'react';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';
import LoggedNav from '../Components/LoggedNav';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Signup from './Signup';
import Login from './Login';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rewards = () => {
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
    <div className="min-h-screen bg-gray-100">
      <LoggedNav />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Your Rewards Dashboard
        </h1>
        <p className="text-gray-600 mb-8 text-center sm:text-left">
          Track your Eco-Impact and earn Rewards
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
          <span className="text-lg text-gray-600 text-center sm:text-left">Available Points</span>
          <span className="text-3xl font-bold text-blue-600 mt-2 sm:mt-0 sm:mr-5">
            2450 <FontAwesomeIcon icon={faCoins} />
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <DashboardCard title="Trees Planted" progress={75} total="20 trees" current="15 trees" />
          <DashboardCard title="Carbon Offset" progress={60} total="30kg" current="18kg" />
          <DashboardCard title="Recycling Goal" progress={90} total="50kg" current="45kg" />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
          Available Rewards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <RewardCard
                key={index}
                title="Online Course Credit"
                description="Access to premium Sustainability Courses"
                points="1000 Points"
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const DashboardCard = ({ title, progress, total, current }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="relative bg-gray-200 h-2 rounded-full mb-2">
        <div
          className="absolute top-0 left-0 h-2 bg-green-600 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600">
        {current} / {total} ({progress}% Complete)
      </p>
    </div>
  );
};

const RewardCard = ({ title, description, points }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
      <h3 className="text-md font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <p className="text-lg font-bold text-blue-600 mb-2">{points}</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
        Redeem
      </button>
    </div>
  );
};

export default Rewards;
