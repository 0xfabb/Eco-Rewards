import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Hero from "./Components/Hero";
import Join from "./Components/Join";
// import Footer from "./Components/Footer";
import Features from "./Components/Features";
import Rewards from "./Pages/Rewards";
import Community from "./Pages/Community";
import Blogs from "./Pages/Blogs";
import Signup from "./Pages/Signup";
import Chatbot from "./Pages/Chatbot";
import Upload from "./Pages/Upload";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Writeblog from "./Pages/Writeblog";
import LandingFooter from "./Components/LandingFooter";
import Blogdetails from "./Pages/Blogdetails"

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>

          <Route
            path="/"
            element={
              <div className="bg-black">
                <Navbar />
                <Hero />
                <Features />
                <Content />
                <Join />
                <LandingFooter />
              </div>
            }
          /> 
           <Route path="/blog/:id" element={<Blogdetails />} />
          <Route
            path="/Community"
            element={
              <>
                <Community />
              </>
            }
          />
          <Route
            path="/Home"
            element={
              <>
                <Homepage />
              </>
            }
          />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Chatbot" element={<Chatbot />} />
          <Route path="/Writeblog" element={<Writeblog />} />
          <Route
            path="/SignUp"
            element={
              <>
                <Navbar />
                <Signup />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
