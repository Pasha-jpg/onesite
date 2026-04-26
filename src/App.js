import "./App.css";
import Header from "./components/header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Regions from "./pages/Regions"; // Create this component
import Contact from "./pages/Contact"; // Create this component
import News from "./pages/News"; // Create this component
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let userName= {
  author:"Develop by Khurram Pasha",
  id: "ID# 20012745"
  }
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/News" element={<News />} />
        </Routes>
        <Footer name={userName} />
      </div>
    </Router>

  );
}

export default App;
