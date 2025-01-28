
import { useParams, Link } from "react-router-dom";
import blogs from "../PageComponents/blogs";
import LoggedNav from "../Components/LoggedNav";
import Footer from "../Components/Footer";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const blog = blogs[id]; // Fetch the corresponding blog using the ID

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <LoggedNav />
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-red-500">
            Blog not found!
          </h1>
          <Link
            to="/"
            className="text-green-600 hover:underline"
          >
            Go back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <LoggedNav />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-2">
          By {blog.author} on {blog.publish_date}
        </p>
        <div className="bg-white p-6 rounded-md shadow-md">
          <p className="text-gray-700 leading-relaxed">{blog.blog_content}</p>
        </div>
        <Link
          to="/"
          className="mt-4 inline-block text-green-600 hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
