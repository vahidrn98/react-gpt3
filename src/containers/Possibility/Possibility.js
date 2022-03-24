import "./Possibility.css";
import possibilityImage from "../../assets/possibility.png";

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-container">
      <h4>Some subtext for the title</h4>
        <h1 className="gradient__text">
          The future is now and you just have to realize it. Step into future
          today and make it happen.
        </h1>
        
        <p>
          The description for the feature the description for the feature the
          description for the feature the description for the feature the
          description for the feature
        </p>
        <h4>Another subtext for the title</h4>
      </div>
    </div>
  );
}
export default Possibility;
