import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppBar from "./components/AppBar";
import WatchPage from "./pages/WatchPage";

function App() {
  return (
    <>
      <Router>
          <AppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/watch" element={<WatchPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
