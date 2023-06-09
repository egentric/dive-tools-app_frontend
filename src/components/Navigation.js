import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./LogoRVB";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navigation = ({ onSelect }) => {
  const navigate = useNavigate();
  const [types, setTypes] = useState([]);
  const [isConnected, setIsConnected] = useState(false); // initialiser isConnected à false
  // On récupère l'id du user
  const [pseudo, setPseudo] = useState("");
  const [picture, setPicture] = useState("");

  const displayUsers = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/current-user`, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setPseudo(res.data.pseudo);
        setPicture(res.data.picture);

        console.log(res.data);
      });
  };

  // console.log(isConnected);
  useEffect(() => {
    displayUsers();
  }, []);
  // Sans les crochets ça tourne en boucle

  const removeToken = () => {
    localStorage.removeItem("access_token");
    // console.log("test");
    setIsConnected(false);
    navigate("/login");
  };
  // Vérifier si le token est présent dans localStorage et mettre à jour l'état isConnected en conséquence
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsConnected(true);
    }
  }, []);

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
              <Nav.Link href="#" className="navLink">
                <img
                  src={`http://localhost:8000/storage/uploads/users/${picture}`}
                  alt="photo adhérent"
                  width="40px"
                  className="rounded-image"
                />
                {pseudo}
              </Nav.Link>
            )}

            {isConnected ? (
              <Nav.Link className="navLink" onClick={removeToken}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fill-rule="evenodd"
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
