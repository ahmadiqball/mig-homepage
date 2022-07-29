import Card from "../UI/Card";
import "./Lokasi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faWrench,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

const Lokasi = () => {
  return (
    <Card className="lokasi">
      <div className="lokasi-head">
        <h2>Lokasi</h2>
        <button>Lihat Semua</button>
      </div>
      <div className="lokasi-cards">
        <div className="lokasi-card lokasi-card_1">
          <FontAwesomeIcon icon={faBuilding} className="lokasi-fa"/>
          <div>
            <h2>20</h2>
            <h5>Induk</h5>
          </div>
        </div>
        <div className="lokasi-card lokasi-card_2" >
          <FontAwesomeIcon icon={faWrench} className="lokasi-fa" />
          <div>
            <h2>3</h2>
            <h5>Sub Lokasi Level 1</h5>
          </div>
        </div>
        <div className="lokasi-card lokasi-card_3">
          <FontAwesomeIcon icon={faWarehouse} className="lokasi-fa" />
          <div>
            <h2>1</h2>
            <h5>Sub Lokasi Level 2</h5>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Lokasi;
