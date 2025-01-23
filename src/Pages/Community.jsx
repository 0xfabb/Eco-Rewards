import  { useState, useEffect } from "react";
import LoggedNav from "../Components/LoggedNav";
import Footer from "../Components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Navbar from "../Components/Navbar";
import Signup from "./Signup";
import Login from "./Login";
import 'react';

const Community = () => {
  const [user, setUser] = useState(null);

  const [topics, setTopics] = useState([
    { id: 1, title: "How to reduce plastic usage?", author: "Rumani", replies: 12 },
    { id: 2, title: "Tips for growing a home garden", author: "Parv", replies: 8 },
    { id: 3, title: "Best eco-friendly products in 2025", author: "Kashvi", replies: 15 },
  ]);

  const [newTopic, setNewTopic] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleNewTopicSubmit = (e) => {
    e.preventDefault();
    if (newTopic && author) {
      setTopics([...topics, { id: topics.length + 1, title: newTopic, author, replies: 0 }]);
      setNewTopic("");
      setAuthor("");
    }
  };

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
    <div className="bg-gray-50 min-h-screen">
      <LoggedNav />

      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-500 text-white text-center p-10 rounded-md shadow-lg mb-8">
        <h1 className="text-4xl font-bold">Welcome to the Community</h1>
        <p className="mt-2 text-lg">
          Join discussions, share ideas, and collaborate on eco-friendly projects.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Discussion Topics */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-4">Discussion Topics</h2>
          <ul className="bg-white p-4 rounded-md shadow-lg">
            {topics.map((topic) => (
              <li
                key={topic.id}
                className="border-b py-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold text-green-600">{topic.title}</h3>
                  <p className="text-sm text-gray-500">Started by {topic.author}</p>
                </div>
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {topic.replies} replies
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Create New Topic */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Start a New Topic</h2>
          <form
            onSubmit={handleNewTopicSubmit}
            className="bg-white p-4 rounded-md shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="topicTitle"
                className="block text-sm font-semibold text-gray-700"
              >
                Topic Title
              </label>
              <input
                type="text"
                id="topicTitle"
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter the topic title"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="authorName"
                className="block text-sm font-semibold text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="authorName"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Post Topic
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Community;
