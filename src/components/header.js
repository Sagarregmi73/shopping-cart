import React from 'react';
import {NavLink} from 'react-router-dom';
const Header=(props)=>{
  const {data}=props;
    return(
      
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><span style={{color:"green"}}>SAGAR </span>| Shopping Cart</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#cart">Cart {" "} <sup style={{color:'yellow',fontSize:'18px',backgroundColor:"red",borderRadius:"5px"}}>{data.length>0 && data.length}</sup></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#signin">signIn</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
       
    )
}

export default Header;
