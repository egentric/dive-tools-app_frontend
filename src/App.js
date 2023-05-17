import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/layouts/Home";

import Login from "./pages/layouts/Login";
import Register from "./pages/layouts/Register";
import Noaccess from "./pages/layouts/Noaccess";
import Regulators from "./pages/regulators/Regulators";
import AddRegulator from "./pages/regulators/AddRegulator";
import EditRegulator from "./pages/regulators/EditRegulator";
import ShowRegulator from "./pages/regulators/ShowRegulator";

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

        <Route path="/regulators" element={<Regulators />} />

        <Route path="/regulators/add" element={<AddRegulator />} />
        <Route path="/regulators/edit/:regulator" element={<EditRegulator />} />
        <Route path="/regulators/show/:regulator" element={<ShowRegulator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
