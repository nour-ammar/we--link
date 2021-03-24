import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="app">
    <div className="top">Administartion : Noor Ammar</div>
    {/* <Login/> */}
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/education" component={Education} /> */}

        </Switch>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
