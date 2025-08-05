import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left-side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">632014,Vellore,Tamil Nadu</span>
          {/* <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div> */}
        </div>
      </div>

      <div className="paddings innerWidth flexCenter f-list">


        <div className="footer-list1">
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Customer Care</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                Login
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                My account
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Wish List
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Order tracking
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                FAQ
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Contact us
              </a>
            </li>
          </ul>
        </div>


        <div className="footer-list2">
          <ul className="footer-list">

          <li>
            <p className="footer-list-title">Services</p>
          </li>

          <li>
            <a href="#" className="footer-link">Order tracking</a>
          </li>

          <li>
            <a href="#" className="footer-link">Wish List</a>
          </li>

          <li>
            <a href="#" className="footer-link">Login</a>
          </li>

          <li>
            <a href="#" className="footer-link">My account</a>
          </li>

          <li>
            <a href="#" className="footer-link">Terms & Conditions</a>
          </li>

          <li>
            <a href="#" className="footer-link">Promotional Offers</a>
          </li>

        </ul>

        </div>

        <div className="footer-list3">
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <a href="#" className="footer-link">About</a>
            </li>
            <li>
              <a href="#" className="footer-link">Blog</a>
            </li>
            <li>
              <a href="#" className="footer-link">All Products</a>
            </li>
            <li>
              <a href="#" className="footer-link">Locations Map</a>
            </li>
            <li>
              <a href="#" className="footer-link">FAQ</a>
            </li>
            <li>
              <a href="#" className="footer-link">Contact us</a>
            </li>
          </ul>


        </div>
      </div>
    </section>
  );
};

export default Footer;
