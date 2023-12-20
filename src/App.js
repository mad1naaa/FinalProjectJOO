import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about/About";
import CourseHome from "./allcourses/CourseHome";
import Team from "./team/Team";
import Pricing from "./pricing/Pricing";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Footer from "./common/footer/Footer";
import Home from "./home/Home";
import Library from "./library/Main";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/courses" element={<CourseHome />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/journal" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/library" element={<Library />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
