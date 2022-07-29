import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTicket,
  faClipboardCheck,
  faStore,
  faCity,
  faUserGroup,
  faLayerGroup,
  faCube,
  faCircleNodes,
  faMagnifyingGlassDollar,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navbarIconTop = [faHouse, faTicket, faClipboardCheck, faStore, faCity];
  const navbarIconBot = [
    faUserGroup,
    faLayerGroup,
    faCube,
    faCircleNodes,
    faMagnifyingGlassDollar,
  ];

  return (
    <div className="navbar">
      <div className="navbar-logo"></div>
      <div className="navbar-list">
        {navbarIconTop.map((faicon) => (
          <div className='navbar-item'>
            <FontAwesomeIcon icon={faicon} className="navbar-fa" />
          </div>
        ))}
      </div>
      <div className="navbar-list">
        {navbarIconBot.map((faicon) => (
          <div className='navbar-item'>
            <FontAwesomeIcon icon={faicon} className="navbar-fa" />
          </div>
        ))}
      </div>
      <FontAwesomeIcon icon={faIdBadge} className="navbar-fa" />
    </div>
  );
};

export default Navbar;
