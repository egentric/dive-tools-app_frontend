import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditTank = () => {
  const navigate = useNavigate();
  const { tank } = useParams();
  const [codeTank, setCodeTank] = useState("");
  const [gasTank, setGasTank] = useState("");
  const [outletTank, setOutletTank] = useState("");
  const [builderTank, setBuilderTank] = useState("");
  const [markTank, setMarkTank] = useState("");
  const [numberTank, setNumberTank] = useState("");
  const [capacityTank, setCapacityTank] = useState("");
  const [firstTestDateTank, setFirstTestDateTank] = useState("");
  const [peTank, setPeTank] = useState("");
  const [operatingPressureTank, setOperatingPressureTank] = useState("");
  const [tivDate, setTivDate] = useState("");
  const [requalificationDate, setRequalificationDate] = useState("");
  const [qrcodeTank, setQrcodeTank] = useState("");
  const [availabilityTank, setAvailabilityTank] = useState("");
  const [causeUnavailabilityTank, setCauseUnavailabilityTank] = useState("");
  const [userId, setUserId] = useState("");

  const [userCoId, setUserCoId] = useState("");
  const [role, setRole] = useState([]);

  const [users, setUsers] = useState([]); // Tableau de données des utilisateurs
  const [selectedUser, setSelectedUser] = useState(null);

  const [validationError, setValidationError] = useState({});
  const [counterLoanTank, setCounterLoanTank] = useState(0);

  const [labelValue, setLabelValue] = useState("");

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    const valueToSend = isChecked ? 0 : labelValue;

    setCounterLoanTank(valueToSend);
    setLabelValue(isChecked ? counterLoanTank.toString() : "");

    if (isChecked) {
      window.alert("Le compteur va être remit à zéro !");
    }
  };
  useEffect(() => {
    displayUsers();
    displayUserCo();
  }, []);

  const changeHandler = (event) => {
    setQrcodeTank(event.target.files[0]);
  };

  const handleChangeSelect1 = (event) => {
    setGasTank(event.target.value);
  };

  const handleChangeSelect2 = (event) => {
    setCapacityTank(event.target.value);
  };

  const handleChangeSelect3 = (event) => {
    setOutletTank(event.target.value);
  };

  const handleNameChange = (selectedOption) => {
    setSelectedUser(selectedOption);
  };
  const sortedOptions = users
    .map((user) => ({
      value: user.id,
      label: `${user.lastname} ${user.firstname}`,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  // // ------------Récupération Users----------------------------------------//
  const displayUsers = async () => {
    await axios
      .get("http://localhost:8000/api/users", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setUsers(res.data.data);
      });
  };

  // // ------------Récupération UserCo----------------------------------------//
  const displayUserCo = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/current-user`, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setUserCoId(res.data.id);
        setRole(res.data.role_id);
        // console.log(res.data);
      });
  };
  // GET - Récupère les valeurs de la fiche avec l'API
  const getBcd = async () => {
    await axios
      .get(`http://localhost:8000/api/tanks/${tank}`, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setCodeTank(res.data.data.code_tank);
        setMarkTank(res.data.data.mark_tank);
        setGasTank(res.data.data.gas_tank);
        setOutletTank(res.data.data.outlet_tank);
        setBuilderTank(res.data.data.builder_tank);
        setNumberTank(res.data.data.number_tank);
        setCapacityTank(res.data.data.capacity_tank);
        setFirstTestDateTank(res.data.data.first_test_date_tank);
        setPeTank(res.data.data.PE_tank);
        setOperatingPressureTank(res.data.data.operating_pressure_tank);
        setTivDate(res.data.data.tiv_date);
        setRequalificationDate(res.data.data.requalification_date);
        setQrcodeTank(res.data.data.qrcode_tank);
        setAvailabilityTank(res.data.data.availability_tank);
        setCauseUnavailabilityTank(res.data.data.cause_unavailability_tank);
        setCounterLoanTank(res.data.data.counter_loan_tank);
        setUserId(res.data.data.user_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Fonction de modification de Bcd
  const updateTank = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "POST");
    formData.append("code_tank", codeTank);
    formData.append("mark_tank", markTank);
    formData.append("gas_tank", gasTank);
    formData.append("outlet_tank", outletTank);
    formData.append("builder_tank", builderTank);
    formData.append("number_tank", numberTank);
    formData.append("capacity_tank", capacityTank);
    formData.append("first_test_date_tank", firstTestDateTank);
    formData.append("PE_tank", peTank);
    formData.append("operating_pressure_tank", operatingPressureTank);
    formData.append("tiv_date", tivDate);
    formData.append("requalification_date", requalificationDate);
    formData.append("availability_tank", availabilityTank);
    formData.append("cause_unavailability_tank", causeUnavailabilityTank);
    formData.append("user_id", userId);

    if (qrcodeTank !== null) {
      formData.append("qrcode_tank", qrcodeTank);
    }

    formData.append("counter_loan_BCD", counterLoanBcd);

    // La boucle suivante utilise la méthode formData.entries() pour afficher toutes les paires clé-valeur de l'objet FormData dans la console.
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    await axios
      .post(`http://127.0.0.1:8000/api/tanks/${tank}`, formData, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then(() => navigate("/tanks"))
      .catch(({ response }) => {
        if (response.status != 200) {
          setValidationError(response.data);
        }
      });
  };
  return <div></div>;
};

export default EditTank;
