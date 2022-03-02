import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lets Build Something amazing with GPT-3 and OpenAI
        </h1>
        <p className="gpt3__header-content__description">
          lorem sajjdfnjdbfjnnf jb jdfjdbjndfbs hdbfbja bdfdfjkdb fbbdndnf
          jndfjnd fjndfndnffndnf nb kj ndf anbfbdbfbd bfbdbb b bjbf bsdhbwlke
          kjewnj bkjb hjbf kjbdahfb jkf
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Submit</button>
        </div>
        <div className="gpt3__header-content__users">
          <div className="gpt3__header-content__users-images">
            <img
              src={people}
              alt="user"
              className="gpt3__header-content__users-avatar"
            />
          </div>
          
            <p>160,000 people are currently using our products.</p>
          
        </div>
        
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
}
export default Header;
