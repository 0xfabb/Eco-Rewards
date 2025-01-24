import 'react';
import { useState } from 'react';
import LoggedNav from '../Components/LoggedNav';
import Footer from '../Components/Footer';
import { useNavigate } from "react-router-dom";

const Writeblog = () => {
    const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock blog submission logic
    console.log({ title, category, content });

    // Redirect to blogs page after submission
    navigate("/blogs");
  };
  return (
    <div>
        <LoggedNav />
        <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-lg bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Write a Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            >
              <option value="">Select a category</option>
              <option value="Hot">Hot</option>
              <option value="Trending">Trending</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-semibold text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              rows="6"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit Blog
          </button>
        </form>
      </div>
    </div> 
      <Footer /> 
    </div>
  );
}

export default Writeblog;
