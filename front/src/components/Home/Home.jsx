// import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import Couverture from "../../Images/couverture-admin-home.png";
import Enseignants from "../../Images/enseignants.png";
import Eleves from "../../Images/eleves.png";
import Classes from "../../Images/classes.png";
import { FaBeer } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <main>
        <img src={Enseignants} />
        <img src={Eleves} />
        <img src={Classes} />
      </main>
    </div>
  );
}

export default Home;
