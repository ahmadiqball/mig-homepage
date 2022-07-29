import "./Relation.css";
import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const Relation = () => {
  return (
    <Card className="relation">
      <div className="relation-top">
        <h2>Relasi</h2>
        <button>Lihat Semua</button>
      </div>
      <div className="relation-list">
        <div className="relation-item">
          <FontAwesomeIcon icon={faShareNodes} className="relation_fa" />
          <div className="relation_info">
            <h4>20</h4>
            <h5>Memiliki</h5>
          </div>
        </div>

        <div className="relation-item">
          <FontAwesomeIcon icon={faShareNodes} className="relation_fa" />
          <div className="relation_info">
            <h4>108</h4>
            <h5>Menggunakan</h5>
          </div>
        </div>

        <div className="relation-item">
          <FontAwesomeIcon icon={faShareNodes} className="relation_fa" />
          <div className="relation_info">
            <h4>67</h4>
            <h5>Meminjam</h5>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Relation;
