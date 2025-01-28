import { useState, useEffect } from "react";
import "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import LoggedNav from "../Components/LoggedNav";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Signup from "./Signup";
import Login from "./Login";
import blogs from "../PageComponents/blogs";

const Blogs = () => {
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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Blog List */}
          <div className="md:col-span-3">
            <h1 className="text-2xl font-bold mb-4">Blogs</h1>
            <div className="grid gap-4">
              {blogs.map((blog, index) => (
                <Link to={`/blog/${index}`} key={index}>
                  <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition">
                    <h2 className="text-lg font-semibold text-green-600">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {blog.display_description}
                    </p>
                    <p className="text-sm text-gray-500">
                      By {blog.author} on {blog.publish_date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Write a Blog Button */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-4">Contribute</h2>
              <Link
                to="/Writeblog"
                className="w-full bg-green-600 text-white text-center py-2 rounded-md hover:bg-green-700 transition block"
              >
                Write a Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
