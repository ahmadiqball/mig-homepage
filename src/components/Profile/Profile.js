import React from "react";
import "./Profile.css";
import Card from "../UI/Card";
import logo from "../images/profile-picture-1.jpg";
import ProfileData from "./ProfileData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
  const companyData = props.profileData[0];
  
  return (
    <Card className='profile'>
      <div className="profile-picture">
        <img alt="company-logo" src={logo}></img>
      </div>
      <div className="profile-head">
        <div className="profile-head_name">
          <h2>{companyData.name}</h2>
          <h4>{companyData.service}</h4>
        </div>
        <button className="profile-head_edit">
          <FontAwesomeIcon icon={faPencil} className="profil-head_edit_icon" />
          Sunting Profil
        </button>
      </div>
      <div className="profile-desc">
        <ProfileData descData={companyData}/>
      </div>
    </Card>
  );
};

export default Profile;
