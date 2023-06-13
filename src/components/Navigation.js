import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./LogoRVB";
import { useNavigate } from "react-router-dom";

import { getUser } from "../actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const Navigation = ({ onSelect }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isConnected, setIsConnected] = useState(false); // initialiser isConnected à false

  const user = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUser());
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsConnected(true);
    }
  }, []);
  // Sans les crochets ça tourne en boucle

  const removeToken = () => {
    localStorage.removeItem("access_token");
    // console.log("test");
    setIsConnected(false);
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className=" nav navOmbre fixed-top navbar-extended">
      <Container fluid>
        <Navbar.Brand href="/home" className="logo">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isConnected && (
              <Nav.Link href={`/users/show/${user.id}`} className="navLink">
                <img
                  src={`http://localhost:8000/storage/uploads/users/${
                    !isEmpty(user) && user.picture
                  }`}
                  alt="photo adhérent"
                  width="40px"
                  className="rounded-image"
                />
                {!isEmpty(user) && user.pseudo}
              </Nav.Link>
            )}

            {isConnected && (
              <Nav.Link href={`/contacts/add`} className="navLink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                </svg>{" "}
                Contact
              </Nav.Link>
            )}
            {isConnected ? (
              <Nav.Link className="navLink" onClick={removeToken}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
                <span className="menu d-none d-md-inline">Déconnexion</span>
              </Nav.Link>
            ) : (
              <Nav.Link href="/login" className="navLink">
                Connexion
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
