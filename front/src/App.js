import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="app">
    <div className="top">Administartion_Noor Ammar</div>
    {/* <Login/> */}
    <Router>
      <div>
        <Navbar className="nav" />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/education" component={Education} /> */}

        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
    </div>
  );
}

export default App;
