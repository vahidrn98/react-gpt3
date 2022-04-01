import "./Footer.css";
import gpt3Logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="gpt3__footer section__padding" id="footer">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to get in to the future before the others?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request early access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Something Something</p>
        </div>
        <div className="gpt3__footer-links_container">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_container">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_container">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; Copyright 2022 Vahid Reza Niazmand. All rights reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
