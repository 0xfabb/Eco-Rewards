import "react";
import { useState, useEffect } from "react";
import LoggedNav from "../Components/LoggedNav";
import Footer from "../Components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Navbar from "../Components/Navbar";
import Signup from "./Signup";
import Login from "./Login";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title,
      description,
      file,
    });

    alert("Your content has been uploaded successfully!");
    setTitle("");
    setDescription("");
    setFile(null);
  };

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
    <div className="bg-gray-100">
      <LoggedNav />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto max-w-lg bg-white p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-6">Upload Your Contribution</h1>
          <p className="text-gray-600 mb-6">
            Share videos or photos of your environmental activities, like
            planting trees, cleaning up waste, or promoting sustainability!
          </p>
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter a title for your task"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                rows="4"
                placeholder="Describe the task or activity you performed"
                required
              ></textarea>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label
                htmlFor="file"
                className="block text-sm font-semibold text-gray-700"
              >
                Upload File
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                required
                accept="image/*,video/*"
              />
              <p className="text-sm text-gray-500 mt-2">
                Supported formats: Images and Videos
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Upload;
