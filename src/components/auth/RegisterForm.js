import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoRVB from "../LogoRVB";

const RegisterForm = () => {
  const [pseudo, setPseudo] = useState("");
  //   const [civility, setCivility] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [phone, setPhone] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  //   const [licenseDate, setLicenseDate] = useState("");
  //   const [licensee, setLicensee] = useState("");
  //   const [medicalCertificateDate, setMedicalCertificateDate] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pseudo", pseudo);
    // formData.append("civility", civility);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email_user", emailUser);
    formData.append("phone", phone);
    formData.append("cellphone", cellphone);
    formData.append("address", address);
    formData.append("zip", zip);
    formData.append("city", city);
    formData.append("license_number", licenseNumber);
    // formData.append("license_date", licenseDate);
    // formData.append("licensee", licensee);
    // formData.append("medical_certificate_date", medicalCertificateDate);
    formData.append("password", password);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      const response = await axios
        .post(`http://127.0.0.1:8000/api/register`, formData)
        .then(navigate("/login"))
        .catch(({ response }) => {
          if (response.status === 422) {
            setValidationError(response.data.errors);
          }
        });

      const data = await response.json();
      if (data.status === "success") {
        console.log("Registration successful");
        console.log(data.authorisation.token);
        localStorage.setItem("token", data.authorisation.token);
        // window.location.href = "/";
        navigate("/", { replace: true });
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6 mt-5">
          <Row>
            <div className="mb-5 d-flex justify-content-center">
              <LogoRVB />
            </div>
          </Row>
          <div className="card mb-3">
            <div className="card-header">
              <h3 className="card-title">Enregistrement</h3>
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
                <Row>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupPseudo">
                      <Form.Label>Pseudo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Pseudo"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                      />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formGroupCivility">
                    <Form.Label>Civilité</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Civilité"
                      value={civility}
                      onChange={(e) => setCivility(e.target.value)}
                    />
                  </Form.Group>{" "} */}
                    <Row>
                      <Col md={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupLastname"
                        >
                          <Form.Label>Nom</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Nom"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                          />
                        </Form.Group>{" "}
                      </Col>
                      <Col md={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupFirstname"
                        >
                          <Form.Label>Prénom</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Prénom"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                        </Form.Group>{" "}
                      </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGroupEmailUser">
                      <Form.Label>Adresse mail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Adresse mail"
                        value={emailUser}
                        onChange={(e) => setEmailUser(e.target.value)}
                      />
                    </Form.Group>{" "}
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupPhone">
                          <Form.Label>Téléphone fixe</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Téléphone fixe"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </Form.Group>{" "}
                      </Col>
                      <Col md={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupCellphone"
                        >
                          <Form.Label>Téléphone portable</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Téléphone portable"
                            value={cellphone}
                            onChange={(e) => setCellphone(e.target.value)}
                          />
                        </Form.Group>{" "}
                      </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGroupAddress">
                      <Form.Label>Adresse</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Adresse"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Form.Group>{" "}
                    <Row>
                      <Col md={3}>
                        <Form.Group className="mb-3" controlId="formGroupZip">
                          <Form.Label>Code postal</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Code postal"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                          />
                        </Form.Group>{" "}
                      </Col>
                      <Col md={9}>
                        <Form.Group className="mb-3" controlId="formGroupCity">
                          <Form.Label>Ville</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ville"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group
                      className="mb-3"
                      controlId="formGroupLicenseNumber"
                    >
                      <Form.Label>N° de licence</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="N° de licence"
                        value={licenseNumber}
                        onChange={(e) => setLicenseNumber(e.target.value)}
                      />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formGroupLicenseDate">
                    <Form.Label>Date de la licence</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Date de la licence"
                      value={licenseDate}
                      onChange={(e) => setLicenseDate(e.target.value)}
                    />
                  </Form.Group> */}
                    {/* <Form.Group className="mb-3" controlId="formLicensee">
                    <Form.Label>Licencié</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Licencié"
                      value={licensee}
                      onChange={(e) => setLicensee(e.target.value)}
                    />
                  </Form.Group> */}
                    {/* <Form.Group
                    className="mb-3"
                    controlId="formGroupMedicalCertificateDate"
                  >
                    <Form.Label>Date du certificat médical</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Date du certificat médical"
                      value={medicalCertificateDate}
                      onChange={(e) =>
                        setMedicalCertificateDate(e.target.value)
                      }
                    />
                  </Form.Group> */}
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Button
                      className="btnBlue mt-2 btn-sm"
                      size="lg"
                      block="block"
                      type="submit"
                    >
                      Enregistrement
                    </Button>
                  </Form>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
