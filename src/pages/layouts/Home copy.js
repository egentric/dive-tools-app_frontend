return (
  <div>
    <Navigation />
    <Row>
      <Col xs="auto" md={2} lg={2}>
        <Sidebar />
      </Col>
      <Col>
        <Row className="content mt-5 mb-5">
          {/* ===================================================================== RESERVATION =============================================== */}
          <Col sm={11} md={6} lg={4}>
            <Row className="justify-content-center p-4">
              <Link to="/reservations/add" className="bloc">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="reservation"
                        viewBox="0 0 58.69 45.96"
                      ></svg>{" "}
                      <span className="menu">Réservation</span>
                    </h3>
                  </div>

                  <div className="card-body">
                    <p>
                      Rubrique de réservation du matériel de plongée, Détendeur,
                      Gilet Stabilisateur et bouteille.
                    </p>
                    <p>
                      <Link
                        to={`/reservations/add`}
                        className="btn btnWhite btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="reservation"
                          viewBox="0 0 58.69 45.96"
                        ></svg>{" "}
                        <span className="menu">Réservation</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </Link>
            </Row>
          </Col>
          {/* ===================================================================== LISTE RESERVATION =============================================== */}
          <Col sm={11} md={6} lg={4}>
            <Row className=" justify-content-center p-4">
              <div className="bloc">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="ListeResa"
                        viewBox="0 0 58.98 56.69"
                      ></svg>{" "}
                      <span className="menu">Listes réservations</span>
                    </h3>
                  </div>

                  <div className="card-body">
                    <p>Toutes les listes de réservation se trouvent ici.</p>
                    <p>
                      <Link
                        to={`/reservations/user/${userId}`}
                        className="btn btnWhite btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="reservation"
                          viewBox="0 0 63.01 56.69"
                        ></svg>{" "}
                        <span className="menu">Mes réservations</span>
                      </Link>
                      <br />
                      {role === 1 || role === 2 ? (
                        <Link
                          to={`/reservations`}
                          className="btn btnWhite btn-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="ListeResa"
                            viewBox="0 0 58.98 56.69"
                          ></svg>{" "}
                          <span className="menu">Listes réservations</span>
                        </Link>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
              {/* </Col> */}
            </Row>
          </Col>
          {/* ===================================================================== MATERIEL =============================================== */}
          {role === 1 || role === 2 ? (
            <Col sm={11} md={6} lg={4}>
              <Row className="justify-content-center p-4">
                <div className="bloc">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-gear"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                        </svg>{" "}
                        <span className="menu">Matériels</span>
                      </h3>
                    </div>

                    <div className="card-body">
                      <p>Information et gestion du matériel.</p>
                      <p>
                        <Link to={`/tanks`} className="btn btnWhite btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="tank"
                            viewBox="0 0 17.44 57.07"
                          ></svg>{" "}
                          <span className="menu d-none d-md-inline">
                            Bouteilles de plongée
                          </span>
                        </Link>
                        <br />

                        <Link to={`/bcds`} className="btn btnWhite btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="BCD"
                            viewBox="0 0 48.9 56.69"
                          ></svg>{" "}
                          <span className="menu d-none d-md-inline">
                            Gilets Stabilisateurs
                          </span>
                        </Link>
                        <br />

                        <Link
                          to={`/regulators`}
                          className="btn btnWhite btn-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="Regulator"
                            viewBox="0 0 56.69 26.69"
                          ></svg>{" "}
                          <span className="menu d-none d-md-inline">
                            Détendeur
                          </span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          ) : null}
          {/* ===================================================================== UTILISATEURS =============================================== */}
          {role === 1 && (
            <Col sm={11} md={6} lg={4}>
              <Row className="justify-content-center p-4">
                <Link to="/users" className="bloc">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-people"
                          viewBox="0 0 16 16"
                        ></svg>
                        <span className="menu">Utilisateurs</span>
                      </h3>
                    </div>

                    <div className="card-body">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Noms</th>
                            <th>Prénoms</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user) => (
                            <tr key={user.id}>
                              <td>{user.lastname}</td>
                              <td>{user.firstname}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Link>
              </Row>
            </Col>
          )}
          {/* ===================================================================== MON COMPTE =============================================== */}
          <Col sm={11} md={6} lg={4}>
            <Row className="justify-content-center p-4">
              <Link to={`/users/show/${userId}`} className="bloc">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      ></svg>
                      <span className="menu d-none d-md-inline">
                        Mon Compte
                      </span>
                    </h3>
                  </div>

                  <div className="card-body">
                    <Row className="justify-content-center">
                      <div className="text-center">
                        <img
                          src={`http://localhost:8000/storage/uploads/users/${
                            !isEmpty(user) && user.picture
                          }`}
                          alt="photo adhérent"
                          width="130px"
                          className="rounded-image"
                        />
                      </div>
                    </Row>
                    <Row className="justify-content-center mt-3">
                      <p className="text-center">
                        Gestion du compte de {user.lastname} {user.firstname}
                      </p>
                    </Row>
                  </div>
                </div>
              </Link>
            </Row>
          </Col>
          {/* ===================================================================== Contacts =============================================== */}
          {role === 1 && (
            <Col sm={11} md={6} lg={4}>
              <Row className="justify-content-center p-4">
                <Link to="/contacts" className="bloc">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-envelope-at"
                          viewBox="0 0 16 16"
                        ></svg>
                        <span className="menu d-none d-md-inline">
                          Contacts
                        </span>
                      </h3>
                    </div>

                    <div className="card-body">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Sujets</th>
                            <th>Dates</th>
                          </tr>
                        </thead>
                        <tbody>
                          {contacts.map((contact) => (
                            <tr key={contact.id}>
                              <td>{contact.topic_contact}</td>
                              <td>{formatDate(contact.created_at)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Link>
              </Row>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
    <Footer />
  </div>
);
