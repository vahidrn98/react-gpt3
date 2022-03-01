import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#gpt3">What is GPT3</a>
    </p>
    <p>
      <a href="#possibility">OpenAI</a>
    </p>
    <p>
      <a href="#features">Case studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

function Navbar() {
  const [ isMenuOpen, toggleMenu ] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {isMenuOpen ? (
            <RiCloseLine
              color={"#fff"}
              size="27"
              onClick={() => {
                toggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              color={"#fff"}
              size="27"
              onClick={() => {
                toggleMenu(true);
              }}
            />
          )}
          {isMenuOpen && (
            <div className="gpt3__navbar-menu_container scale-up-tr">
              <Menu />
              <div className="gpt3__navbar-menu_container-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
