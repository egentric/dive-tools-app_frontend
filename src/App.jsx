import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/layouts/Home";

import Login from "./pages/layouts/Login";
import Register from "./pages/layouts/Register";
import Noaccess from "./pages/layouts/Noaccess";
import Regulators from "./pages/regulators/Regulators";
import AddRegulator from "./pages/regulators/AddRegulator";
import EditRegulator from "./pages/regulators/EditRegulator";
import ShowRegulator from "./pages/regulators/ShowRegulator";
import Bcds from "./pages/bcds/Bcds";
import AddBcd from "./pages/bcds/AddBcd";
import EditBcd from "./pages/bcds/EditBcd";
import ShowBcd from "./pages/bcds/ShowBcd";
import Tanks from "./pages/tanks/Tanks";
import AddTank from "./pages/tanks/AddTank";
import EditTank from "./pages/tanks/EditTank";
import ShowTank from "./pages/tanks/ShowTank";
import Users from "./pages/users/Users";
import EditUser from "./pages/users/EditUser";
import ShowUser from "./pages/users/ShowUser";
import Reservations from "./pages/reservations/Reservations";
import AddReservation from "./pages/reservations/AddReservation";
import EditReservation from "./pages/reservations/EditReservation";
import ShowReservation from "./pages/reservations/ShowReservation";
import ReservationUser from "./pages/reservations/ReservationsUser";
import Contacts from "./pages/contacts/Contacts";
import AddContact from "./pages/contacts/AddContact";
import ShowContact from "./pages/contacts/ShowContact";
import jwtDecode from "jwt-decode";
import auth from "./services/auth/token"

function App() {
  // On récupère role_id
  const [role, setRole] = useState([]);
  const token = localStorage.getItem("access_token");

  // const displayUser = async () => {
  //   await axios
  //     .get(`http://127.0.0.1:8000/api/current-user`, {
  //       headers: {
  //         Authorization: "Bearer" + localStorage.getItem("access_token"),
  //       },
  //     })
  //     .then((res) => {
  //       setRole(res.data.role);
  //       // console.log(res.data.role);
  //     });
  // };
  // useEffect(() => {
  // //   if (token) {
  // //     displayUser();
  // //   }
  // getDecodedToken();
  // }, []);

  // let getToken = () => {
  //   return localStorage.getItem("access_token");
  // };
  
  // let getDecodedToken = () => {
  //   if (getToken()) {
  //     return jwtDecode(localStorage.getItem("access_token"));
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="*" element={<Login />} /> */}

        <Route
          path="/home"
          element={!token ? <Navigate to="/login" replace={true} /> : <Home />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Noaccess" element={<Noaccess />} />
        <Route
          path="/regulators"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <Regulators />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />

        <Route
          path="/regulators/add"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <AddRegulator />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/regulators/edit/:regulator"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <EditRegulator />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/regulators/show/:regulator"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <ShowRegulator />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/contacts"
          element={
            token ? (
              role === 1 ? (
                <Contacts />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/contacts/add"
          element={token ? <AddContact /> : <Login />}
        />
        <Route
          path="/contacts/show/:contact"
          element={
            token ? (
              role === 1 ? (
                <ShowContact />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/bcds"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <Bcds />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/bcds/add"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <AddBcd />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/bcds/edit/:bcd"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <EditBcd />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/bcds/show/:bcd"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <ShowBcd />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/tanks"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <Tanks />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route path="/tanks/add" element={token ? <AddTank /> : <Login />} />
        <Route
          path="/tanks/edit/:tank"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <EditTank />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/tanks/show/:tank"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <ShowTank />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/reservations"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <Reservations />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/reservations/add"
          element={token ? <AddReservation /> : <Login />}
        />
        <Route
          path="/reservations/edit/:reservation"
          element={
            !token ? (
              <Navigate to="/login" replace={true} />
            ) : (
              <EditReservation />
            )
          }
        />
        <Route
          path="/reservations/show/:reservation"
          element={
            !token ? (
              <Navigate to="/login" replace={true} />
            ) : (
              <ShowReservation />
            )
          }
        />
        <Route
          path="/reservations/user/:user"
          element={
            !token ? (
              <Navigate to="/login" replace={true} />
            ) : (
              <ReservationUser />
            )
          }
        />
        <Route
          path="/users"
          element={
            token ? (
              role === 1 ? (
                <Users />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/users/edit/:user"
          element={
            token ? (
              role === 1 || role === 2 ? (
                <EditUser />
              ) : (
                <Noaccess />
              )
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        />
        <Route
          path="/users/show/:user"
          element={
            !token ? <Navigate to="/login" replace={true} /> : <ShowUser />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
