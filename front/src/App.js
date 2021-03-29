import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Annonce from "./components/Annonce/Annonce";
import Réunions from "./components/Réunions/Réunions"
function App() {
  return (
    <div className="app">
      <div className="top">Administartion : Noor Ammar</div>
      {/* <Login/> */}
      <Router>
        <div>
          <Navbar />
          <hr/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/annonce" component={Annonce} />
            <Route exact path="/réunions" component={Réunions} />

          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
