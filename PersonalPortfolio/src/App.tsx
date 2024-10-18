import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter> {/* Wrap everything inside BrowserRouter */}
      <div className="min-h-screen flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-grow">
          <Routes> {/* Move Routes inside the main layout */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/projects" element={<Project />} /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
