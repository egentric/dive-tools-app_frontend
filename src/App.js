import React from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Noaccess" element={<Noaccess />} />

        {/* <Route path="/regulators" element={<loggedIn ? (<Start />) : ( navigate replace to ={"/login"}) /> */}
        <Route path="/regulators" element={<Regulators />} />
        <Route path="/regulators/add" element={<AddRegulator />} />
        <Route path="/regulators/edit/:regulator" element={<EditRegulator />} />
        <Route path="/regulators/show/:regulator" element={<ShowRegulator />} />

        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/show/:contact" element={<ShowContact />} />

        <Route path="/bcds" element={<Bcds />} />
        <Route path="/bcds/add" element={<AddBcd />} />
        <Route path="/bcds/edit/:bcd" element={<EditBcd />} />
        <Route path="/bcds/show/:bcd" element={<ShowBcd />} />

        <Route path="/tanks" element={<Tanks />} />
        <Route path="/tanks/add" element={<AddTank />} />
        <Route path="/tanks/edit/:tank" element={<EditTank />} />
        <Route path="/tanks/show/:tank" element={<ShowTank />} />

        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reservations/add" element={<AddReservation />} />
        <Route
          path="/reservations/edit/:reservation"
          element={<EditReservation />}
        />
        <Route
          path="/reservations/show/:reservation"
          element={<ShowReservation />}
        />
        <Route path="/reservations/user/:user" element={<ReservationUser />} />

        <Route
          path="/users"
          element={
            // role == 1 ?
            <Users />
            //  : <Noaccess />
          }
        />
        <Route
          path="/users/edit/:user"
          element={
            // role == 1 || role == 2 ?
            <EditUser />
            //  : <Noaccess />
          }
        />
        <Route
          path="/users/show/:user"
          element={
            // role == 1 || role == 2 ?
            <ShowUser />
            //  : <Noaccess />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
