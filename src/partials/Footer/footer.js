import React from 'react';
import "./footer.css";
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <div className='footer'>

      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Popular Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/x80pro" className="nav-link p-0 ">X80 Pro</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/x80" className="nav-link p-0 ">X80</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/v27-pro" className="nav-link p-0 ">V27 Pro</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/v27" className="nav-link p-0 ">V27</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/t1pro5g" className="nav-link p-0 ">T1 Pro 5G</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/y100" className="nav-link p-0 ">Y100</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/y02" className="nav-link p-0 ">Y02</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/y56-5g" className="nav-link p-0 ">Y56 5G</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/tws2anc" className="nav-link p-0 ">TWS 2 ANC</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/tws2e" className="nav-link p-0 ">TWS 2e</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products/charger" className="nav-link p-0 ">Wireless Flash Charger</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/products?choose=all" className="nav-link p-0 ">All Models</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/activity/enterprise-sales" className="nav-link p-0 ">Enterprise sales</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="https://www.vivo.com/in/where-to-buy" className="nav-link p-0 ">vivo Exclusive store</NavLink></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Purchase Online</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">E-store</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Buy phones</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Buy accessories</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">My orders</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Privacy Terms for E-Store</NavLink></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Support</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">FAQs</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Service Center</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Funtouch OS</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">IMEI Authentication</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Ouery of Spare Parts Price</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">System Update</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Write to CEO</NavLink></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>About vivo</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Info</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">India Impact Report</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">News centre</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">E-waste Management</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Careers at vivo</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Terms and Conditions</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Investor Information</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">vivo Privacy Center</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 ">Sustainability</NavLink></li>
              </ul>
            </div>

            <div className="col-md-3 offset-md-1 mb-3">

              <h5>Chat with us</h5>
              <p>Email Us (Reply in 24h)</p>
              <p>24*7</p>
              <h2>1800-208-3388</h2>
              <p>24*7</p>
              <h2>1800-208-3388</h2>
              <p>24*7 (Only for X-Series Customers)</p>
              <h2>1800-208-4488</h2>
              <p>Follow us</p>
              

            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 vivo Mobile India Pvt Ltd. All rights reserved. | Privacy Policy | Cookie Policy | Warranty Terms | Privacy Support | Payment Terms and Policies</p>
            <p>India-English🌐</p>
          </div>
        </footer>
      </div>

    </div>
  )
}

export default Footer;
