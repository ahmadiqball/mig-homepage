import "./BankItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const BankItem = (props) => {
  return (
    <div className="bank-list">
      <div className="bank-item">
        <div className="bank-item_visa"></div>
        <div className="bank-item_info">
          <div className="bank-item_head">
            <h3>{props.item.bankName}</h3>
            <div>
              <FontAwesomeIcon icon={faPencil} className="bank-item_edit bank-item_fa" />
              <FontAwesomeIcon icon={faTrashCan} className="bank-item_del bank-item_fa" />
            </div>
          </div>
          <h4>{'**** ' + props.item.accNum.slice(4,8) + ' - ' + props.item.accName}</h4>
          <h4>IDR</h4>
        </div>
      </div>
    </div>
  );
};

export default BankItem;
