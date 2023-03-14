import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

  const { loginWithRedirect, logout , isAuthenticated , user} = useAuth0();


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">

        <div className="container">
          <NavLink className="navbar-brand" to="#">VIVO</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active p-3 " aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/src/components/HomePage/productpage.js">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/src/components/HomePage/Storepage.js">E-Store</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/src/components/HomePage/Vivostore.js">vivo Exclusive store</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/src/components/HomePage/Community.js">Community</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">Support</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">Function OS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">Explore vivo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active p-3" to="/">iQOO</NavLink>
              </li>
            </ul>
          </div>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>{isAuthenticated && <p>{user.name}</p>}</li>
              <li>
                { isAuthenticated ? (
                    <li className="nav-item">
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out
                    </button>
                    </li>
                  ) : (
                    <li className="nav-item">
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                    </li>
                  )
                }
              </li>
            </ul>
          </div>


        </div>

      </nav>



    </div>
  )
}

export default Navbar;
