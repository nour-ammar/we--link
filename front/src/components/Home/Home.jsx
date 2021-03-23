// import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import Couverture from "../../Images/couverture-admin-home.png";
import Enseignants from "../../Images/enseignants.png";
import Eleves from "../../Images/eleves.png";
import Classes from "../../Images/classes.png"




function Home() {
  return (
    
  <div className="home">
  <img src={Couverture} className="couverture"/>
  <main>
      <img src={Enseignants}/>
      <img src={Eleves}/>
      <img src={Classes}/>
  </main>
  </div>
    
  );
  ;
}

export default Home;