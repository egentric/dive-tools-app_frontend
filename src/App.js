import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/layouts/Home";

import Login from "./pages/layouts/Login";
import Register from "./pages/layouts/Register";
import Noaccess from "./pages/layouts/Noaccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/dashboard" element={<DashboardAppmail />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Noaccess" element={<Noaccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
