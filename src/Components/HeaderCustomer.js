import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./headerCustomer.scss";

function HeaderCustomer() {
  const [active, setActive] = useState(0);
  const [scroll, setscroll] = useState(0);
  const [icon, setIcon] = useState("nav__toggler");
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100 && window.innerWidth <= 768) {
        setscroll(1);
      } else if (window.scrollY > 300 && window.innerWidth >= 768) {
        setscroll(1);
      } else {
        setscroll(0);
      }
    });
  }, []);

  const showBar = () => {
    setActive((old) => (old === 0 ? 1 : 0));
  };

  // Icon Toggler
  const navToggle = () => {
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    ///////////// vartotoju headeris
    <header>
      <div
        id="myHead"
        className={scroll === 0 ? "container" : "container sticky"}
      >
        <nav className="navbar">
          {/* <div className="logo" onClick={() => navigate("/")}>
            Logo
          </div> */}
          <div className="logo">FindFilm</div>
          <ul className={active === 0 ? "nav-links" : "nav-links active"}>
            <li>
              <Link className="link" onClick={() => navigate("/")} to="/">
                Home
              </Link>
            </li>
          </ul>

          <div
            onClick={() => {
              navToggle();
              showBar();
            }}
            className={icon}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          {/* <FontAwesomeIcon
            icon={faBars}
            className=" font fas fa-bars fa-2x"
            id="burger"
            onClick={showBar}
          ></FontAwesomeIcon> */}
        </nav>
      </div>
    </header>

    //// admin headeris
    // <Fragment>
    //   <header id="myHead" className="header">
    //     <h1>Products</h1>
    //     <div className="input">
    //       <Link className="btn" to='/admin'>List</Link>
    //       <Link className="btn" to='/create'>Add new Item</Link>
    //       {/* <Link to='/create'>Create</Link> */}
    //     </div>
    //     {/* <HeaderCartButton onClick={props.onShowCart} /> */}
    //   </header>
    // </Fragment>
  );
}

export default HeaderCustomer;
