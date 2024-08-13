import "./App.css";
import Right from "./Right";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { analytics } from "./firebase-config.js";
import ProjectsPage from "./ProjectsPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Right />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
