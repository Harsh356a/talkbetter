import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Assistant from "./pages/Assistant";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Demo from "./pages/Demo";
import { useState } from "react";
import Sidebar from "./components/Navbar";
import Configuration from "./pages/Configuration";
import "./pages/transition.css";
import Configure from "./pages/Configure";
import Phone from "./pages/Phone";

function App() {
  const [showAssis, setShowSis] = useState(false);

  function showAsisFn(status) {
    setShowSis(status);
  }

  return (
    <div className="bg-gray-500 w-full h-screen">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/phone" element={<Phone />} />
          <Route
            path="/assistants"
            element={<Assistant showAsisFn={showAsisFn} />}
          />
          <Route path="/configure" element={<Configuration />} />
          <Route path="/configured" element={<Configure />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;