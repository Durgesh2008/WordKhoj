import React from 'react'
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const {color,icon,}=props.mode;
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${color} bg-${color}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/textutils">TextUtils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">WordMeaning</Link>
        
        </li>
       
       
      </ul>
      {/* <i className="fa-solid fa-moon "></i> */}
      <i onClick={props.TogglerMode} className={`fa-${icon} fa-moon`} ></i>
    </div>
  </div>
</nav>
        </>
  )
}

export default Navbar
