import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "../../components/Sidebar";
import Navigation from "../../components/Navigation";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowRegulator = () => {
  const { regulator } = useParams();
  const navigate = useNavigate();
  const [showRegulator, setShowRegulator] = useState("");

  useEffect(() => {
    displayShowRegulator();
  }, []);
  // Sans les crochets ça tourne en boucle

  const displayShowRegulator = async () => {
    await axios
      .get(`http://localhost:8000/api/regulators/${regulator}`, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setShowRegulator(res.data);

        // console.log(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteShowRegulator = (id) => {
    axios
      .delete(`http://localhost:8000/api/regulators/${id}`, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then(() => {
        navigate("/appmail_contacts"); // Redirige vers la page d'index après la suppression
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div></div>;
};

export default ShowRegulator;
