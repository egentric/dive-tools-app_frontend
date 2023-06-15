import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import auth from "../services/auth/token";

const Sidebar = () => {
  const userId = auth.getId();
  const role = auth.getRoles();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="style">
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
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                  <path
                    fillRule="evenodd"
                    d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                  />
                </svg>
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
                >
                  <path d="m62.89,55.49l-3.01-4.6c-.14-.22-.39-.35-.65-.35h-23.62v-2.06h23.62c.43,0,.78-.35.78-.78,0-9.27-7.13-17.15-16.31-18.12v-3.21h2.04v-2.94h-7.9v2.94h2.04v3.21c-1.48.16-2.91.49-4.26.99V7.82c0-.46-.37-.84-.84-.84h-5.57v1.67h4.73v22.62c-2.56,1.24-4.79,3.06-6.51,5.28h-15.55c-.46,0-.84.37-.84.84s.37.84.84.84h14.39c-.97,1.58-1.7,3.31-2.16,5.14h-12.23c-.46,0-.84.37-.84.84s.37.84.84.84h11.9c-.13.87-.2,1.76-.2,2.66,0,.43.35.78.78.78h9.59v2.06h-9.59c-.26,0-.51.13-.65.35l-.21.33H1.67V8.65h4.37v-1.67H.84c-.46,0-.84.37-.84.84v44.23c0,.46.37.84.84.84h21.55l-1.7,2.6c-.16.24-.17.54-.03.8.14.25.4.41.69.41h40.9c.29,0,.55-.16.69-.41.14-.25.12-.56-.03-.8Zm-33.49-8.58h-4.26c.03-.63.1-1.26.2-1.88.09-.57.22-1.13.37-1.67.51-1.85,1.33-3.58,2.41-5.14.4-.57.83-1.12,1.3-1.64,1.28-1.43,2.81-2.64,4.52-3.57.54-.29,1.1-.56,1.67-.79.12-.05.23-.09.35-.14-.11.09-.23.2-.35.3-.54.47-1.11,1.03-1.67,1.7-1.77,2.07-3.51,5.12-4.22,9.45-.07.46-.14.93-.19,1.42-.06.63-.12,1.27-.13,1.95Zm3.91,0c.06-1.41.29-2.8.63-4.14.41-1.61,1-3.14,1.67-4.54,1.82-3.76,4.32-6.54,5.99-7.2h.05s.09,0,.14,0c8.86,0,16.23,7.09,16.64,15.88h-25.13Zm-4.72,8.23h-5.81l1.47-2.25.52-.79h4.51l-.18.79-.51,2.25Zm5.06,0v-3.05h25.16l1.99,3.05h-27.15Z" />
                  <path d="m29.2,16.12H11.87c-.46,0-.84.37-.84.84s.37.84.84.84h17.34c.46,0,.84-.37.84-.84s-.37-.84-.84-.84Z" />
                  <path d="m6.58,17.46c.02.05.05.1.08.14.03.05.06.09.1.13.04.04.08.07.13.1.05.03.09.06.14.08.05.02.1.04.16.05.05.01.11.02.16.02s.11,0,.16-.02c.05,0,.1-.03.16-.05.05-.02.1-.05.14-.08.05-.03.09-.06.13-.1.16-.16.25-.37.25-.59s-.09-.44-.25-.59c-.04-.04-.08-.08-.13-.1-.05-.03-.09-.06-.14-.08-.05-.02-.1-.03-.16-.05-.11-.02-.22-.02-.33,0-.05.01-.11.03-.16.05s-.1.05-.14.08c-.05.03-.09.06-.13.1-.04.04-.07.08-.1.13-.03.05-.06.1-.08.15-.02.05-.04.1-.05.15-.01.05-.02.11-.02.16s0,.11.02.16c0,.05.03.11.05.16Z" />
                  <path d="m29.2,22.93H11.87c-.46,0-.84.37-.84.84s.37.84.84.84h17.34c.46,0,.84-.37.84-.84s-.37-.84-.84-.84Z" />
                  <path d="m6.58,24.26c.02.05.05.1.08.14.03.05.06.09.1.13.16.15.37.24.59.24s.44-.09.59-.24c.16-.15.25-.37.25-.59,0-.05,0-.11-.02-.16,0-.05-.03-.1-.05-.15-.02-.05-.05-.1-.08-.15-.03-.05-.06-.09-.1-.13-.31-.31-.87-.31-1.18,0-.04.04-.07.08-.1.13-.03.05-.06.1-.08.15-.02.05-.04.1-.05.15-.01.05-.02.11-.02.16s0,.11.02.16c0,.05.03.11.05.16Z" />
                  <path d="m29.2,29.74H11.87c-.46,0-.84.37-.84.84s.37.84.84.84h17.34c.46,0,.84-.37.84-.84s-.37-.84-.84-.84Z" />
                  <path d="m7.36,31.59c.22,0,.44-.09.59-.25.16-.15.25-.37.25-.59s-.09-.44-.25-.59c-.31-.31-.87-.31-1.18,0-.04.04-.07.08-.1.13-.03.05-.06.1-.08.15-.02.05-.04.1-.05.15-.01.05-.02.11-.02.17,0,.22.09.44.24.59.16.15.37.25.59.25Z" />
                  <path d="m6.58,37.88c.02.05.05.1.08.15.03.05.06.09.1.13.04.04.08.08.13.1.05.03.09.05.14.08.05.02.1.04.16.05.05,0,.11.02.16.02s.11,0,.16-.02c.05-.01.1-.03.16-.05.05-.02.1-.05.14-.08s.09-.07.13-.1c.04-.04.08-.08.1-.13.03-.05.06-.1.08-.15.02-.05.04-.1.05-.15.01-.05.02-.11.02-.16s0-.11-.02-.16c0-.05-.03-.11-.05-.16-.02-.05-.05-.1-.08-.14-.03-.05-.06-.09-.1-.13-.04-.04-.08-.07-.13-.1-.05-.03-.09-.05-.14-.08-.05-.02-.1-.04-.16-.05-.11-.02-.22-.02-.33,0-.05,0-.11.03-.16.05-.05.02-.1.05-.14.08-.05.03-.09.07-.13.1-.04.04-.07.08-.1.13-.03.04-.06.09-.08.14-.02.05-.04.1-.05.16-.01.05-.02.11-.02.16s0,.11.02.16c0,.05.03.1.05.15Z" />
                  <path d="m6.58,44.69c.02.05.05.1.08.15.03.05.06.09.1.13.16.16.37.25.59.25s.44-.09.59-.25c.16-.15.25-.37.25-.59s-.09-.44-.25-.59c-.04-.04-.08-.08-.13-.1-.05-.03-.09-.06-.14-.08-.05-.02-.1-.04-.16-.05-.11-.02-.22-.02-.33,0-.05,0-.11.03-.16.05-.05.02-.1.05-.14.08-.05.03-.09.06-.13.1-.15.15-.24.37-.24.59,0,.05,0,.11.02.16,0,.05.03.1.05.15Z" />
                  <path d="m11.83,10.58h11.32c2.27,0,4.11-1.84,4.11-4.11,0-.99-.8-1.79-1.79-1.79h-3.19c0-2.58-2.1-4.68-4.68-4.68s-4.68,2.1-4.68,4.68h-3c-.99,0-1.79.8-1.79,1.79v.41c0,2.05,1.66,3.7,3.7,3.7Zm5.77-7.8c1.04,0,1.89.85,1.89,1.89s-.85,1.89-1.89,1.89-1.89-.85-1.89-1.89.85-1.89,1.89-1.89Z" />
                </svg>{" "}
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
                  >
                    <path d="m22.78,48.99h32.65c.4,0,.73-.33.73-.73,0-8.67-6.68-16.05-15.26-16.95v-3.01h1.91v-2.75h-7.39v2.75h1.91v3.01c-8.59.9-15.26,8.28-15.26,16.95,0,.4.33.73.73.73Zm8.39-1.46c.31-7.15,5.13-13.83,7.76-14.86h.04s.09,0,.13,0c8.29,0,15.19,6.63,15.58,14.86h-23.51Zm2.48-13.88c-2.49,2.06-5.93,6.28-6.14,13.88h-3.98c.29-6.23,4.38-11.71,10.12-13.88Z" />
                    <path d="m58.86,55.56l-2.82-4.31c-.14-.21-.36-.33-.61-.33H22.78c-.25,0-.48.12-.61.33l-2.82,4.31c-.15.22-.16.51-.03.75.13.24.37.38.64.38h38.28c.27,0,.51-.15.64-.38.13-.24.12-.52-.03-.75Zm-27.37-.33v-2.85h23.55l1.86,2.85h-25.41Zm-4.09-2.85l-.64,2.85h-5.44l1.86-2.85h4.22Z" />
                    <path d="m9.28,6.64h.59v-.11h-4.87c-.43,0-.78.35-.78.78v1.57h1.57v-.79h.9c.54-.87,1.5-1.46,2.59-1.46Z" />
                    <path d="m36.76,6.53h-5.21v1.57h4.43v16.48h1.57V7.31c0-.43-.35-.78-.78-.78Z" />
                    <path d="m35.97,30.52c.12-.02.24-.05.36-.07v-1.17h-.36v1.23Z" />
                    <path d="m28.05,4.38h-2.99c0-2.42-1.96-4.38-4.38-4.38-1.66,0-3.1.92-3.84,2.28.47.03.93.12,1.37.26,0,0,0,0,.01,0,.44.14.85.33,1.23.57,0,0,0,0,0,0,.32-.31.75-.5,1.23-.5.98,0,1.77.79,1.77,1.77,0,.57-.27,1.07-.69,1.39,0,0,0,0,0,0,.06.14.11.28.16.42.05.15.09.29.13.44h1.78c1.68,0,3.05,1.37,3.05,3.05,0,.03,0,.05,0,.08,1.64-.44,2.85-1.93,2.85-3.71,0-.93-.75-1.68-1.68-1.68Z" />
                    <path d="m33.33,10.95c0-.43-.35-.78-.78-.78h-5.21v1.57h4.43v20.1c.51-.23,1.03-.44,1.57-.62V10.95Z" />
                    <path d="m1.57,51.56V11.73h4.09v-1.57H.78c-.43,0-.78.35-.78.78v41.4c0,.43.35.78.78.78h19l1.02-1.57H1.57Z" />
                    <path d="m27.33,18.72H11.11c-.43,0-.78.35-.78.78s.35.78.78.78h16.22c.43,0,.78-.35.78-.78s-.35-.78-.78-.78Z" />
                    <path d="m6.16,19.97s.04.09.07.13c.03.04.06.08.09.12.04.04.08.07.12.09.04.03.09.05.13.07.05.02.1.04.15.04.05.01.1.02.15.02s.1,0,.15-.02c.05,0,.1-.02.15-.04.05-.02.09-.04.13-.07.04-.03.08-.06.12-.09.15-.15.23-.35.23-.56s-.08-.41-.23-.55c-.04-.04-.07-.07-.12-.1-.04-.03-.09-.05-.13-.07-.05-.02-.1-.03-.15-.04-.1-.02-.2-.02-.31,0-.05.01-.1.02-.15.04s-.09.05-.13.07c-.04.03-.08.06-.12.1-.04.04-.07.07-.09.12-.03.04-.05.09-.07.14-.02.05-.04.09-.04.14-.01.05-.02.1-.02.15s0,.1.02.15c0,.05.02.1.04.15Z" />
                    <path d="m27.33,25.09H11.11c-.43,0-.78.35-.78.78s.35.78.78.78h16.22c.43,0,.78-.35.78-.78s-.35-.78-.78-.78Z" />
                    <path d="m6.16,26.34s.04.09.07.13c.03.04.06.09.09.12.15.14.35.23.56.23s.41-.08.55-.23c.15-.14.23-.35.23-.56,0-.05,0-.1-.02-.15,0-.05-.02-.1-.04-.14-.02-.05-.04-.09-.07-.14-.03-.04-.06-.08-.1-.12-.29-.29-.81-.29-1.11,0-.04.04-.07.07-.09.12-.03.04-.05.09-.07.14-.02.05-.04.09-.04.14-.01.05-.02.1-.02.15s0,.11.02.15c0,.05.02.1.04.15Z" />
                    <path d="m27.33,31.46H11.11c-.43,0-.78.35-.78.78s.35.78.78.78h16.22c.43,0,.78-.35.78-.78s-.35-.78-.78-.78Z" />
                    <path d="m6.88,33.2c.21,0,.41-.09.55-.23.15-.14.23-.35.23-.55s-.08-.41-.23-.56c-.29-.29-.81-.29-1.11,0-.04.04-.07.08-.09.12-.03.04-.05.09-.07.14-.02.05-.04.1-.04.14-.01.05-.02.11-.02.16,0,.2.08.41.23.55.15.14.35.23.56.23Z" />
                    <path d="m11.11,37.84c-.43,0-.78.35-.78.78s.35.78.78.78h12.36c.31-.54.64-1.06,1.01-1.57h-13.36Z" />
                    <path d="m6.16,39.09s.04.09.07.14c.03.04.06.08.09.12.04.04.08.07.12.1.04.03.09.05.13.07.05.02.1.04.15.05.05,0,.1.02.15.02s.1,0,.15-.02c.05-.01.1-.03.15-.05.05-.02.09-.04.13-.07s.08-.06.12-.1c.04-.04.07-.07.1-.12.03-.04.05-.09.07-.14.02-.05.04-.09.04-.14.01-.05.02-.1.02-.15s0-.1-.02-.15c0-.05-.02-.1-.04-.15-.02-.05-.04-.09-.07-.13-.03-.04-.06-.09-.1-.12-.04-.04-.07-.07-.12-.1-.04-.03-.09-.05-.13-.07-.05-.02-.1-.04-.15-.04-.1-.02-.2-.02-.31,0-.05,0-.1.02-.15.04-.05.02-.09.04-.13.07-.04.03-.08.06-.12.1-.04.04-.07.08-.09.12-.03.04-.05.09-.07.13-.02.05-.04.1-.04.15-.01.05-.02.1-.02.15s0,.1.02.15c0,.05.02.1.04.14Z" />
                    <path d="m11.11,44.21c-.43,0-.78.35-.78.78s.35.78.78.78h10.15c.08-.53.18-1.05.3-1.57h-10.44Z" />
                    <path d="m6.16,45.46s.04.09.07.14c.03.04.06.08.09.12.15.15.35.23.56.23s.41-.08.55-.23c.15-.14.23-.34.23-.55s-.08-.41-.23-.55c-.04-.04-.07-.07-.12-.1-.04-.03-.09-.05-.13-.07-.05-.02-.1-.04-.15-.04-.1-.02-.2-.02-.31,0-.05,0-.1.02-.15.04-.05.02-.09.04-.13.07-.04.03-.08.06-.12.1-.14.14-.23.34-.23.55,0,.05,0,.1.02.15,0,.05.02.1.04.14Z" />
                    <path d="m11.07,13.54h10.6c2.13,0,3.85-1.72,3.85-3.85,0-.93-.75-1.68-1.68-1.68h-2.99c0-2.42-1.96-4.38-4.38-4.38s-4.38,1.96-4.38,4.38h-2.81c-.93,0-1.68.75-1.68,1.68v.38c0,1.91,1.55,3.47,3.47,3.47Zm5.4-7.3c.98,0,1.77.79,1.77,1.77s-.79,1.77-1.77,1.77-1.77-.79-1.77-1.77.79-1.77,1.77-1.77Z" />
                  </svg>{" "}
                  <span className="menu d-none d-md-inline">
                    Listes réservations
                  </span>
                </Nav.Link>
              </li>
            ) : null}
            {/* =============================================================MATERIELS========================================== */}
            <li>
              <Dropdown
                show={isDropdownOpen}
                onToggle={handleDropdownToggle}
                className="menuG"
              >
                <Dropdown.Toggle className="menuG materiel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>{" "}
                  <span className="menu d-none d-md-inline">MATERIELS </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="menuG  dropdown-menu">
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
                        >
                          <path d="m5.17,34.55h48.35c.55,0,1-.45,1-1,0-12.83-9.89-23.74-22.6-25.04V3.91h2.82V0h-10.78v3.91h2.82v4.61c-12.71,1.3-22.6,12.21-22.6,25.04,0,.55.45,1,1,1ZM29.07,10.39h.28c12.34,0,22.62,9.89,23.15,22.17H17.51c.43-11.06,7.73-20.68,11.56-22.17Zm-7.38,1.3c-3.69,2.93-9.13,9.21-9.43,20.87h-6.06c.41-9.45,6.7-17.76,15.5-20.87Z" />
                          <path d="m58.53,44.41l-4.17-6.38c-.19-.28-.5-.45-.84-.45H5.17c-.34,0-.65.17-.84.45L.16,44.41c-.2.31-.22.7-.04,1.02.17.32.51.52.88.52h56.69c.37,0,.71-.2.88-.52.18-.32.16-.72-.04-1.02Zm-5.55-4.83l2.86,4.38H17.98v-4.38h35Zm-40.88,0l-.99,4.38H2.85l2.86-4.38h6.39Z" />{" "}
                        </svg>{" "}
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
                          >
                            <path d="m13.24,7.77l1.46,1.46c.22.22.58.22.8,0l1.77-1.77c.22-.22.22-.58,0-.8l-1.46-1.46c-.22-.22-.58-.22-.8,0l-.21.21-.92-.65s0,0,0,0c0-.87-.71-1.58-1.58-1.58s-1.58.71-1.58,1.58c0,.1.01.19.03.28l-1.43.44h-.79l-2.37-2.78c.28-.28.45-.67.45-1.1,0-.87-.71-1.58-1.58-1.58s-1.58.71-1.58,1.58c0,0,0,.01,0,.02l-1.02.7c-.19-.1-.43-.09-.61.06L.21,3.63c-.25.19-.29.55-.09.8l1.56,1.97c.19.25.55.29.8.09l1.62-1.28c.22-.17.26-.47.14-.71l.15-.12,2.16,3.7h-.36v1.72h.29v2.26c-3.06.55-5.32,3.21-5.32,6.36v30.43c0,.08,0,.16.01.24v3.57h.25s0,3.68,0,3.68h1.3l.03-.08c.16-.39.45-.63.76-.63.49,0,.89.58.89,1.3v.14s.93,0,.93,0v-.4h6.93v.4h.78l.13-.02v-.13c0-.71.4-1.29.89-1.29.31,0,.6.24.76.63l.03.08h1.09v-3.69h.21s0-3.62,0-3.62c0-.06,0-.12,0-.18v-30.43c0-3.19-2.28-5.85-5.38-6.37v-2.25h.3v-1.72h-.09l1.88-1.1.26.16c-.1.21-.06.46.11.64Zm.7-1.75l-.28.27-.43-.26c.12-.08.22-.19.31-.3l.41.29Zm-1.63-2.34c.59,0,1.07.48,1.07,1.07s-.48,1.07-1.07,1.07-1.07-.48-1.07-1.07.48-1.07,1.07-1.07ZM5.04.5c.59,0,1.07.48,1.07,1.07s-.48,1.07-1.07,1.07-1.07-.48-1.07-1.07.48-1.07,1.07-1.07Zm-1.41,3.2l-.52-.65.71-.48c.17.21.39.38.65.48l-.84.66Zm3.39,9.28l.45-.05v-3.14h.44v3.46c-3.57.64-5.32,2.24-5.32,6.42v26.39c-.16-.06-.31-.12-.44-.19v-27.46c0-2.8,2.09-5.13,4.87-5.43Zm3.21,0c2.81.27,4.93,2.61,4.93,5.44v27.41c-1.22.66-3.74,1.09-6.54,1.09-1.56,0-3.04-.13-4.26-.37v-26.88c.05-4.23,2.18-4.52,4.53-4.78l.05-.06v-5.04h.84v3.14l.45.04Zm-2.52-4.9l-2.88-4.94c.07.01.14.02.22.02.07,0,.14-.01.2-.02l2.83,3.33h1.4l1.78-.54c.22.19.49.33.79.38l-3.05,1.78h-1.29Z" />
                            <circle cx="5.04" cy="1.58" r=".73" />
                            <circle cx="12.3" cy="4.74" r=".73" />
                          </svg>{" "}
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
                          >
                            <path d="m19.99,41.28h-6.5c-.17,1.73-.44,3.6-.75,5.41h7.17c-.01-.09-.02-.18-.02-.27v-4.57c0-.2.04-.39.1-.57Z" />
                            <path d="m28.29,46.69h7.87c-.3-1.81-.57-3.68-.75-5.41h-7.2c.06.18.1.37.1.57v4.57c0,.09,0,.18-.02.27Z" />
                            <path d="m16.52,15.99h4.92v-2.56s0-.08,0-.11h-4.93v2.67Z" />
                            <path d="m31.54,15.99v-2.67h-4.43s0,.07,0,.11v2.56h4.42Z" />
                            <path d="m21.61,47.64h4.99c.39,0,.73-.18.96-.46.11-.14.19-.31.24-.49.02-.09.03-.18.03-.27v-4.57c0-.21-.05-.4-.14-.57-.11-.2-.27-.37-.47-.49-.18-.1-.39-.17-.61-.17h-4.99c-.22,0-.43.06-.61.17-.2.12-.36.29-.47.49-.09.17-.14.36-.14.57v4.57c0,.09.01.18.03.27.04.18.12.35.24.49.22.28.57.46.96.46Z" />
                            <path d="m28.13,47.18c-.28.56-.86.95-1.53.95h-4.99c-.67,0-1.25-.39-1.53-.95h-7.41c-.3,1.76-.63,3.44-.93,4.85,3.36-.85,7.62-1.37,12.26-1.37,5.1,0,9.74.62,13.23,1.63-.31-1.46-.67-3.25-.99-5.12h-8.11Z" />
                            <path d="m40.02,23.98c-.81,0-1.47-.66-1.47-1.47v-1.4c-.17.05-.35.07-.54.07h-4.39c-1.15,0-2.08-.93-2.08-2.08v-2.62h-4.51c-.17.42-.58.71-1.06.71h-3.4c-.48,0-.89-.3-1.06-.71h-5.01v2.62c0,1.15-.93,2.08-2.08,2.08h-4.39c-.27,0-.52-.05-.75-.14v1.47c0,.81-.66,1.47-1.47,1.47h-2.2c1.15.93,2.61,2.48,3.78,3.94,1.5,1.88,4.04,5.52,4.25,8.83.07,1.12.02,2.51-.12,4.04h6.72c.31-.4.8-.66,1.35-.66h4.99c.55,0,1.03.26,1.35.66h7.42c-.14-1.53-.19-2.92-.12-4.04.22-3.31,2.76-6.95,4.25-8.83,1.17-1.46,2.63-3.02,3.78-3.94h-3.25Z" />

                            <rect
                              x="9.19"
                              width="6.1"
                              height="19.96"
                              rx=".86"
                              ry=".86"
                            />
                            <rect
                              x="32.77"
                              width="6.1"
                              height="19.96"
                              rx=".86"
                              ry=".86"
                            />
                            <path d="m3.99,24.34s-.03,0-.05,0c-.13,0-.28.08-.45.23-1.98,1.79-4.03,11.25-3.35,18.12.75,7.53,3.89,13.09,4.79,13.83.26.22,1.48.3,2.98-.14,1.22-.35,1.72-.8,1.78-.96.45-1.34,3.12-13.25,2.77-18.6-.34-5.23-7.37-12.18-8.45-12.49Z" />
                            <path d="m45.41,24.57c-.2-.18-.37-.26-.5-.23-1.08.31-8.11,7.26-8.45,12.49-.35,5.34,2.32,17.25,2.77,18.6.05.16.56.61,1.78.96,1.5.43,2.71.35,2.98.14.9-.74,4.04-6.3,4.79-13.83.68-6.86-1.38-16.33-3.35-18.12Z" />
                          </svg>{" "}
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
                          >
                            <path d="m39.62,10.3c-2.15,0-3.89,1.75-3.89,3.89s1.75,3.89,3.89,3.89,3.89-1.75,3.89-3.89-1.75-3.89-3.89-3.89Z" />
                            <path d="m39.62,6.87c-4.04,0-7.32,3.28-7.32,7.32s3.28,7.32,7.32,7.32,7.32-3.28,7.32-7.32-3.28-7.32-7.32-7.32Zm0,11.76c-2.45,0-4.44-1.99-4.44-4.44s1.99-4.44,4.44-4.44,4.44,1.99,4.44,4.44-1.99,4.44-4.44,4.44Z" />
                            <path d="m55.6,10.03h-1.41c0-.4-.21-.79-.59-.99l-3.7-1.93c-.91-1.32-2.08-2.46-3.42-3.35.27-.2.45-.52.45-.88v-1.78c0-.6-.49-1.1-1.1-1.1,0,0-2.3.73-6.3.73-4,0-6.3-.73-6.3-.73-.6,0-1.1.49-1.1,1.1v1.78c0,.4.21.74.53.94-2.02,1.35-3.62,3.28-4.57,5.54-.1-.03-.19-.04-.3-.04h-4.4c-.5,0-.93.34-1.05.81h-4.86c-.13-.46-.55-.81-1.05-.81H6.62c-.6,0-1.09.49-1.09,1.08H0v4.74h5.52c0,.6.5,1.08,1.09,1.08h9.81c.5,0,.93-.34,1.05-.81h4.86c.13.46.55.81,1.05.81h3.89c.97,5.93,6.13,10.48,12.33,10.48,4.26,0,8.03-2.14,10.29-5.41l3.7-1.93c.34-.18.54-.5.58-.86h1.41c.6,0,1.1-.49,1.1-1.1v-6.27c0-.6-.49-1.1-1.1-1.1Zm-38.07.64h4.78v4.19h-4.78v-4.19Zm22.1,12.92c-5.18,0-9.4-4.21-9.4-9.4s4.22-9.4,9.4-9.4,9.4,4.22,9.4,9.4-4.21,9.4-9.4,9.4Z" />{" "}
                          </svg>{" "}
                          <span className="menu d-none d-md-inline">
                            Détendeur
                          </span>
                        </Dropdown.Item>
                      </li>
                    ) : null}
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </li>

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
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
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
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                    </svg>
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
                    >
                      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                    </svg>
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
