import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRegulator = () => {
  const navigate = useNavigate();
  const [codeRegulator, setCodeRegulator] = useState("");
  const [markRegulator, setMarkRegulator] = useState("");
  const [yearRegulator, setYearRegulator] = useState("");
  const [revisionRegulatorDate, setRevisionRegulatorDate] = useState("");
  const [modelRegulator, setModelRegulator] = useState("");
  const [qrcodeRegulator, setQrcodeRegulator] = useState("");
  const [availabilityRegulator, setAvailabilityRegulator] = useState("");
  const [causeUnavailabilityRegulator, setCauseUnavailabilityRegulator] =
    useState("");

  //   const [counterLoanRegulator, setCounterLoanRegulator] = useState("");
  const [validationError, setValidationError] = useState({});

  const changeHandler = (event) => {
    setQrcodeRegulator(event.target.files[0]);
  };

  //Fonction d'ajout de club
  const AddRegulator = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("code_regulator", codeRegulator);
    formData.append("mark_regulator", markRegulator);
    formData.append("model_regulator", modelRegulator);
    formData.append("year_regulator", yearRegulator);
    formData.append("revision_regulator_date", revisionRegulatorDate);
    formData.append("qrcode_regulator", qrcodeRegulator);
    formData.append("availability_regulator", availabilityRegulator);
    formData.append(
      "cause_unavailability_regulator",
      causeUnavailabilityRegulator
    );

    // formData.append("counter_loan_regulator", counterLoanRegulator);

    await axios
      .post(`http://127.0.0.1:8000/api/regulators`, formData, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then(navigate("/regulators"))
      .catch(({ response }) => {
        if (response.status != 200) {
          setValidationError(response.data);
        }
      });
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
                  <h3 className="card-title">Nouveau Détendeur</h3>
                </div>

                <div className="card-body">
                  <div className="form-wrapper">
                    {Object.keys(validationError).length > 0 && (
                      <div className="row">
                        <div className="col-12">
                          <div className="alert alert-danger">
                            <ul className="mb-0">
                              {Object.entries(validationError).map(
                                ([key, value]) => (
                                  <li key={key}>{value}</li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    <Form onSubmit={AddRegulator}>
                      <Row>
                        <Col>
                          <Form.Group controlId="codeRegulator">
                            <Form.Label>Code</Form.Label>
                            <Form.Control
                              type="text"
                              value={codeRegulator}
                              onChange={(event) => {
                                setCodeRegulator(event.target.value);
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="markRegulator">
                            <Form.Label>Marque</Form.Label>
                            <Form.Control
                              type="text"
                              value={markRegulator}
                              onChange={(event) => {
                                setMarkRegulator(event.target.value);
                              }}
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group controlId="modelRegulator">
                            <Form.Label>Modèle</Form.Label>
                            <Form.Control
                              type="text"
                              value={modelRegulator}
                              onChange={(event) => {
                                setModelRegulator(event.target.value);
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="yearRegulator">
                            <Form.Label>Année</Form.Label>
                            <Form.Control
                              type="number"
                              min="2000" // année minimale
                              max="2099" // année maximale
                              step="1" // incréments de 1
                              value={yearRegulator || new Date().getFullYear()} // Utilisez l'année en cours si yearRegulator est vide
                              onChange={(event) => {
                                setYearRegulator(event.target.value);
                              }}
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group controlId="revisionRegulatorDate">
                            <Form.Label>Date de révision</Form.Label>
                            <Form.Control
                              type="date"
                              value={revisionRegulatorDate}
                              onChange={(event) => {
                                setRevisionRegulatorDate(event.target.value);
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Form.Group
                            controlId="qrcodeRegulator"
                            className="mb-3"
                          >
                            <Form.Label>Image du QrCode</Form.Label>
                            <Form.Control
                              type="file"
                              onChange={changeHandler}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Form.Group controlId="availabilityRegulator">
                            <Form.Label>Disponibilité</Form.Label>
                            <Form.Check
                              type="switch"
                              id="custom-switch-user"
                              label="Indisponible"
                              value="0"
                              checked={availabilityRegulator === 0}
                              onChange={(event) => {
                                if (event.target.checked) {
                                  setAvailabilityRegulator(0);
                                }
                              }}
                            />
                            <Form.Check
                              type="switch"
                              id="custom-switch-admin"
                              label="Disponible"
                              value="1"
                              checked={availabilityRegulator === 1}
                              onChange={(event) => {
                                if (event.target.checked) {
                                  setAvailabilityRegulator(1);
                                }
                              }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={8}>
                          {availabilityRegulator === 0 ? (
                            <Form.Group controlId="causeUnavailabilityRegulator">
                              <Form.Label>Cause d'indisponibilité</Form.Label>
                              <Form.Control
                                type="text"
                                value={causeUnavailabilityRegulator}
                                onChange={(event) => {
                                  setCauseUnavailabilityRegulator(
                                    event.target.value
                                  );
                                }}
                              />
                            </Form.Group>
                          ) : null}
                        </Col>
                      </Row>
                      <Button
                        className="btn btnBlue btn-sm me-2 mt-2 "
                        onClick={() => navigate(-1)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-return-left"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                        <span className="menu">Retour</span>
                      </Button>
                      <Button
                        className="btnBlue mt-2 btn-sm"
                        size="lg"
                        block="block"
                        type="submit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        <span className="menu ">Créer</span>
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AddRegulator;
