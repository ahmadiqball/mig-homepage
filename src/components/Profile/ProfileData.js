import React, {useState} from "react";
import "./ProfileData.css";
import { ToggleSlider } from "react-toggle-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProfileData = (props) => {
  const data = props.descData;
  const [compStatus, setCompStatus] = useState(data.status);
  const [toggleState, setToggleState] = useState(data.status);

  const togglehandler = () => {
    if (toggleState) {
      setToggleState(false);
      setCompStatus(false)
    } else {
      setToggleState(true);
      setCompStatus(true)
    }
  };

  let statusData;
  if (compStatus) {
    statusData= 'Aktif';
  } else {
    statusData= 'Tidak Aktif';
  };

  return (
    <div className="profile-data">
      <div>
        <h4>Status Perusahaan</h4>
        <div className={`profile-data_status ${toggleState ? 'active':''}`}>
          <h3>{statusData}</h3>
          <div className="profile-data_status_toggle">
            <ToggleSlider barBackgroundColorActive="#357639" active={toggleState} onToggle={togglehandler}/>
          </div>
        </div>
      </div>
      <div>
        <h4>Singkatan</h4>
        <h3>{data.singkatan}</h3>
      </div>
      <div>
        <h4>Alamat Perusahaan</h4>
        <h3>{data.address}</h3>
      </div>
      <div>
        <h4>Penaggung Jawab (PIC)</h4>
        <h3>{data.pic}</h3>
      </div>
      <div>
        <h4>Tanggal PKP</h4>
        <h3>{data.pkpDate}</h3>
      </div>
      <div className="profile-data_link">
        <h4>E-mail</h4>
        <h3>
          <FontAwesomeIcon icon={faEnvelope} className="profile-data_fa" />
          {data.email}
        </h3>
      </div>
      <div className="profile-data_phone">
        <h4>No. Telp</h4>
        <h3 >
          <FontAwesomeIcon icon={faPhone} className="profile-data_fa" />
          {data.telpNum}
        </h3>
      </div>
      <div className="profile-data_link">
        <h4>Situs Web</h4>
        <h3 ><FontAwesomeIcon icon={faGlobe} className="profile-data_fa" />{data.webSite}</h3>
      </div>
    </div>
  );
};

export default ProfileData;
