import "./TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faMagnifyingGlass,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import profpic from "../images/dummy-profile-pic.png";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-path">
        <h3>Perusahaan</h3>
        <FontAwesomeIcon icon={faGreaterThan} className="path-fa" />
        <h3 className="path-active">Mitramas Infosys Global</h3>
      </div>
      <div className="topbar-right">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="topbar-fa" />
        <FontAwesomeIcon icon={faBell} className="topbar-fa" />
        <div className="topbar-profile">
          <img alt="profile-pic" src={profpic}></img>
          <h3>John Doe</h3>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
