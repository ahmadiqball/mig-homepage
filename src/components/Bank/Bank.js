
import "./Bank.css";
import Card from "../UI/Card";
import BankItem from "./BankItem";

const Bank = (props) => {
  return (
    <Card className="bank">
      <div className="bank-top">
        <h2>Akun Bank</h2>
        <button>+ Tambah Akun Bank</button>
      </div>
      {
        props.bankData.map((bankAcc) => (
          <BankItem item={bankAcc} />
        ))
      }
      {/* <BankItem bankAcc={props.bankData}/> */}
      
    </Card>
  );
};

export default Bank;
