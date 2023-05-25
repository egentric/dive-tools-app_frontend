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

const ShowTank = () => {
  const { tank } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [showTank, setShowTank] = useState("");

  useEffect(() => {
    displayShowTank();
  }, []);
  // Sans les crochets ça tourne en boucle
  const displayShowTank = async () => {
    await axios
      .get(`http://localhost:8000/api/tanks/${tank}`, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setShowTank(res.data.data);
        setImage(res.data.data.qrcode_tank);

        console.log(res.data.data.qrcode_tank);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteShowTank = (id) => {
    axios
      .delete(`http://localhost:8000/api/tanks/${id}`, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then(() => {
        navigate("/tanks"); // Redirige vers la page d'index après la suppression
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formatDateShow = (date) => {
    if (date) {
      const dateParts = date.split("-");
      const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      return formattedDate;
    }
    return ""; // ou une autre valeur par défaut si date n'est pas définie
  };

  const formatDateShow2 = (date) => {
    if (date) {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      const formattedDate = new Intl.DateTimeFormat("fr", options).format(
        new Date(date)
      );
      return formattedDate;
    }
    return ""; // ou une autre valeur par défaut si date n'est pas définie
  };

  return (
    <div>
      {/* <Navigation /> */}
      <Row>
        <Col xs="auto" md={2} lg={1}>
          {/* <Sidebar /> */}
        </Col>
        <Col>
          <div className="row justify-content-center mt-5">
            <div className="col-8 col-sm-8 col-md-8">
              <div className="card mt-5">
                <div className="card-header">
                  <h3 className="card-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="tank"
                      viewBox="0 0 17.44 57.07"
                    >
                      <path d="m13.24,7.77l1.46,1.46c.22.22.58.22.8,0l1.77-1.77c.22-.22.22-.58,0-.8l-1.46-1.46c-.22-.22-.58-.22-.8,0l-.21.21-.92-.65s0,0,0,0c0-.87-.71-1.58-1.58-1.58s-1.58.71-1.58,1.58c0,.1.01.19.03.28l-1.43.44h-.79l-2.37-2.78c.28-.28.45-.67.45-1.1,0-.87-.71-1.58-1.58-1.58s-1.58.71-1.58,1.58c0,0,0,.01,0,.02l-1.02.7c-.19-.1-.43-.09-.61.06L.21,3.63c-.25.19-.29.55-.09.8l1.56,1.97c.19.25.55.29.8.09l1.62-1.28c.22-.17.26-.47.14-.71l.15-.12,2.16,3.7h-.36v1.72h.29v2.26c-3.06.55-5.32,3.21-5.32,6.36v30.43c0,.08,0,.16.01.24v3.57h.25s0,3.68,0,3.68h1.3l.03-.08c.16-.39.45-.63.76-.63.49,0,.89.58.89,1.3v.14s.93,0,.93,0v-.4h6.93v.4h.78l.13-.02v-.13c0-.71.4-1.29.89-1.29.31,0,.6.24.76.63l.03.08h1.09v-3.69h.21s0-3.62,0-3.62c0-.06,0-.12,0-.18v-30.43c0-3.19-2.28-5.85-5.38-6.37v-2.25h.3v-1.72h-.09l1.88-1.1.26.16c-.1.21-.06.46.11.64Zm.7-1.75l-.28.27-.43-.26c.12-.08.22-.19.31-.3l.41.29Zm-1.63-2.34c.59,0,1.07.48,1.07,1.07s-.48,1.07-1.07,1.07-1.07-.48-1.07-1.07.48-1.07,1.07-1.07ZM5.04.5c.59,0,1.07.48,1.07,1.07s-.48,1.07-1.07,1.07-1.07-.48-1.07-1.07.48-1.07,1.07-1.07Zm-1.41,3.2l-.52-.65.71-.48c.17.21.39.38.65.48l-.84.66Zm3.39,9.28l.45-.05v-3.14h.44v3.46c-3.57.64-5.32,2.24-5.32,6.42v26.39c-.16-.06-.31-.12-.44-.19v-27.46c0-2.8,2.09-5.13,4.87-5.43Zm3.21,0c2.81.27,4.93,2.61,4.93,5.44v27.41c-1.22.66-3.74,1.09-6.54,1.09-1.56,0-3.04-.13-4.26-.37v-26.88c.05-4.23,2.18-4.52,4.53-4.78l.05-.06v-5.04h.84v3.14l.45.04Zm-2.52-4.9l-2.88-4.94c.07.01.14.02.22.02.07,0,.14-.01.2-.02l2.83,3.33h1.4l1.78-.54c.22.19.49.33.79.38l-3.05,1.78h-1.29Z" />
                      <circle cx="5.04" cy="1.58" r=".73" />
                      <circle cx="12.3" cy="4.74" r=".73" />
                    </svg>{" "}
                    <span className="menu">Bloc {showTank.code_tank}</span>
                  </h3>
                </div>

                <div className="card-body">
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <th>Code</th>
                        <td>{showTank.code_tank}</td>
                      </tr>
                      <tr>
                        <th>Gaz</th>
                        <td>{showTank.gas_tank}</td>
                      </tr>
                      <tr>
                        <th>Nombre de sortie</th>
                        <td>{showTank.outlet_tank}</td>
                      </tr>
                      <tr>
                        <th>Capacité</th>
                        <td>{showTank.capacity_tank} litres</td>
                      </tr>

                      <tr>
                        <th>Constructeur</th>
                        <td>{showTank.builder_tank}</td>
                      </tr>
                      <tr>
                        <th>Marque</th>
                        <td>{showTank.mark_tank}</td>
                      </tr>
                      <tr>
                        <th>Numéro</th>
                        <td>{showTank.number_tank}</td>
                      </tr>
                      <tr>
                        <th>Pression de service</th>
                        <td>{showTank.operating_pressure_tank} bars</td>
                      </tr>
                      <tr>
                        <th>PE</th>
                        <td>{showTank.PE_tank} bars</td>
                      </tr>

                      <tr>
                        <th>Date du TIV</th>
                        <td>{formatDateShow(showTank.tiv_date)}</td>
                      </tr>
                      <tr>
                        <th>Date de la requalification</th>
                        <td>{formatDateShow(showTank.requalification_date)}</td>
                      </tr>
                      <tr>
                        <th>Date de la 1er épreuve</th>
                        <td>{formatDateShow(showTank.first_test_date_tank)}</td>
                      </tr>

                      <tr>
                        <th>nom QrCode</th>
                        <td>
                          {showTank.qrcode_tank === null
                            ? "Aucun"
                            : showTank.qrcode_tank}
                        </td>
                      </tr>
                      <tr>
                        <th>image QrCode</th>
                        <td>
                          {" "}
                          {showTank.qrcode_tank === null ? (
                            "Aucune"
                          ) : (
                            <img
                              src={`http://localhost:8000/storage/uploads/tanks/${image}`}
                              alt={showTank.qrcode_tank}
                              width="100px"
                            />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>Compteur d'emprunt</th>
                        <td>{showTank.counter_loan_tank}</td>
                      </tr>
                      <tr>
                        <th>Disponibilité</th>
                        <td>
                          {showTank.availability_tank === 1
                            ? "Disponible"
                            : "Indisponible"}
                        </td>
                      </tr>
                      {showTank.availability_tank === 0 ? (
                        <tr>
                          <th>Cause d'indisponibilité</th>
                          <td>{showTank.cause_unavailability_tank}</td>
                        </tr>
                      ) : null}
                      <tr>
                        <th>Propriétaire</th>
                        <td>
                          {showTank.firstname} {showTank.lastname}
                        </td>
                      </tr>

                      <tr>
                        <th>Date de création</th>
                        <td>{formatDateShow2(showTank.created_at)}</td>
                      </tr>
                      <tr>
                        <th>Date de modification</th>
                        <td>{formatDateShow2(showTank.updated_at)}</td>
                      </tr>
                      <tr>
                        <th>Actions</th>
                        <td>
                          <Button
                            className="btn btnBlue btn-sm me-2"
                            onClick={() => navigate(-1)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-arrow-return-left"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                              />
                            </svg>{" "}
                            <span className="menu">Retour</span>
                          </Button>
                          <Link
                            to={`/tanks/edit/${showTank.id}`}
                            className="btn btnGreen btn-1 btn-sm me-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path
                                fillRule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                              />
                            </svg>{" "}
                            <span className="menu">Modifier</span>
                          </Link>

                          <Button
                            className="btn btnRed btn-sm"
                            onClick={() => {
                              deleteShowTank(showTank.id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash3"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>{" "}
                            <span className="menu">Supprimer</span>
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShowTank;
