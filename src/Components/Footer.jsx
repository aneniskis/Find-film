import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <p>Created by A.N. &copy;2022m</p>
          <div className="socials">
            Find me:
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aleksas-neni%C5%A1kis-1a4413239"
            >
              {" "}
              <FaLinkedinIn className="lin"></FaLinkedinIn>
            </a>
            <a target="_blank" href="https://www.facebook.com/aleksas.neniskis">
              {" "}
              <FaFacebook className="fb"></FaFacebook>
            </a>
            <a target="_blank" href="https://www.instagram.com/aneniskis">
              {" "}
              <FaInstagram className="insta"></FaInstagram>
            </a>
          </div>{" "}
        </div>
      </footer>
    </>
  );
}

export default Footer;
