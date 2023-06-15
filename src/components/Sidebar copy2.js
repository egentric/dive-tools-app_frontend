import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  // On récupère l'id du user
  const user = useSelector((state) => state.userReducer);

  const userId = user.id;
  const role = user.role;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Navbar expand="lg" className="menuGauche flex-column">
        <Nav className="menuGauche flex-column">
          <ul>
            {/* =============================================================DASHBOARD========================================== */}
            <li>
              <Nav.Link href="/home" className="menuG">
                <svg
                  // className="px-0 ms-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-speedometer2"
                  viewBox="0 0 16 16"
                ></svg>
                <span className="menu d-none d-md-inline">Dashboard</span>
              </Nav.Link>
            </li>
            {/* =============================================================MES RESERVATIONS========================================== */}
            <li>
              <Nav.Link href={`/reservations/user/${userId}`} className="menuG">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="reservation"
                  viewBox="0 0 63.01 56.69"
                ></svg>{" "}
                <span className="menu d-none d-md-inline">
                  Mes réservations
                </span>
              </Nav.Link>
            </li>
            {/* =============================================================LISTES RESERVATIONS========================================== */}

            {role === 1 || role === 2 ? (
              <li>
                <Nav.Link href="/reservations" className="menuG">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="ListeResa"
                    viewBox="0 0 58.98 56.69"
                  ></svg>{" "}
                  <span className="menu d-none d-md-inline">
                    Listes réservations
                  </span>
                </Nav.Link>
              </li>
            ) : null}
            {/* =============================================================MATERIELS========================================== */}
            <Dropdown
              show={isDropdownOpen}
              onToggle={handleDropdownToggle}
              className="menuG"
            >
              <Dropdown.Toggle className="menuG">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                ></svg>{" "}
                <span className="menu d-none d-md-inline">MATERIELS :</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="menuG">
                {/* =============================================================RESERVATION========================================== */}
                <ul>
                  <li>
                    <Dropdown.Item href="/reservations/add" className="menuG">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="reservation"
                        viewBox="0 0 58.69 45.96"
                      ></svg>{" "}
                      <span className="menu d-none d-md-inline">
                        Réservation
                      </span>
                    </Dropdown.Item>
                  </li>
                  {/* =============================================================BLOCS========================================== */}
                  {role === 1 || role === 2 ? (
                    <li>
                      <Dropdown.Item href="/tanks" className="menuG">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="tank"
                          viewBox="0 0 17.44 57.07"
                        ></svg>{" "}
                        <span className="menu d-none d-md-inline">Blocs</span>
                      </Dropdown.Item>
                    </li>
                  ) : null}
                  {/* =============================================================STABS========================================== */}
                  {role === 1 || role === 2 ? (
                    <li>
                      <Dropdown.Item href="/bcds" className="menuG">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="BCD"
                          viewBox="0 0 48.9 56.69"
                        ></svg>{" "}
                        <span className="menu d-none d-md-inline">Stabs</span>
                      </Dropdown.Item>
                    </li>
                  ) : null}
                  {/* =============================================================DETENDEURS========================================== */}
                  {role === 1 || role === 2 ? (
                    <li>
                      <Dropdown.Item href="/regulators" className="menuG">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="Regulator"
                          viewBox="0 0 56.69 26.69"
                        ></svg>{" "}
                        <span className="menu d-none d-md-inline">
                          Détendeur
                        </span>
                      </Dropdown.Item>
                    </li>
                  ) : null}
                </ul>
              </Dropdown.Menu>
            </Dropdown>

            {/* =============================================================MON COMPTE========================================== */}

            <li>
              <Nav.Link href={`/users/show/${userId}`} className="menuG">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                ></svg>
                <span className="menu d-none d-md-inline">Mon Compte</span>
              </Nav.Link>
            </li>
            {/* =============================================================UTILISATEURS========================================== */}

            {role === 1 && (
              <>
                <li>
                  <Nav.Link href="/users" className="menuG">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-people"
                      viewBox="0 0 16 16"
                    ></svg>
                    <span className="menu d-none d-md-inline">
                      Utilisateurs
                    </span>
                  </Nav.Link>
                </li>
                {/* =============================================================CONTACTS========================================== */}

                <li>
                  <Nav.Link href={`/contacts`} className="menuG">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-envelope-at"
                      viewBox="0 0 16 16"
                    ></svg>
                    <span className="menu d-none d-md-inline">Contacts</span>
                  </Nav.Link>
                </li>
              </>
            )}
          </ul>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Sidebar;
