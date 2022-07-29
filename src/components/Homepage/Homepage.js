import "./Homepage.css";
import TopBar from "../TopBar/TopBar";
import Profile from "../Profile/Profile";
import Lokasi from "../Lokasi/Lokasi"
import Bank from "../Bank/Bank";
import Acitvity from "../Activity/Activity";
import Relation from "../Relation/Relation";

const Homepage = (props) => {
  return (
    <div>
      <div className="homepage">
        <TopBar />
        <div className="homepage-wrapper-1">
          <Profile profileData={props.homeData.companyData}/>
          <div className="homepage-wrapper-2">
            <Lokasi />
            <div className="homepage-wrapper-3">
              <div className="homepage-wrapper-4">
                <Bank bankData={props.homeData.bankAccount}/>
                <Relation />
              </div>
              <Acitvity actData={props.homeData.activityData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;