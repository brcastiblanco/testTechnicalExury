import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import DiscoverUs from "./pages/DiscoverUs";
import FAQ from "./pages/FAQ";
import HowItWorks from "./pages/HowItWorks";
import Sidebar from "./components/Sidebar";

export const App = () => {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover-us" element={<DiscoverUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default App;
