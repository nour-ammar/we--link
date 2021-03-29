import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Images/logoWhite.png"
import "./Navbar.css";




const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo-1">
          <img src={Logo}/>
        </div>
        <div className="list-wrapper">
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{  backgroundColor: location.pathname === "/" && "rgb(205, 233, 235)" , fontWeight: location.pathname === "/" && "normal"  }}
              >
                Acceuil
              </Link>
            </li>
            <li>
              <Link
                to="/annonce"
                onClick={handleClose}
                style={{ backgroundColor: location.pathname === "/annonce" && "rgb(205, 233, 235)" , fontWeight: location.pathname === "/annonce" && "normal"  }}
              >
                Annonce   

              </Link>
            </li>
            <li>
              <Link
                to="/réunions"
                onClick={handleClose}
                style={{ backgroundColor: location.pathname === "/réunions" && "rgb(205, 233, 235)" }}
              >
                Réunions 
              </Link>
              </li>
            <li>
              <Link
                to="/skills"
                onClick={handleClose}
                style={{ backgroundColor: location.pathname === "/skills" && "rgb(205, 233, 235)" }}
              >
                Messagerie  



              </Link>
            </li>
            <li>
              <Link>
              Logout 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;