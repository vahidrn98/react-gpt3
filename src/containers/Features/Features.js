import "./Features.css";
import {Feature} from "../../components";

function Features() {
  const featuresData = [
    {
      title: "something cool.",
      description:
        "the description for the feature the description for the feature the description for the feature the description for the feature the description for the feature",
    },
    {
      title: "something cool.",
      description:
        "the description for the feature the description for the feature the description for the feature the description for the feature the description for the feature",
    },
    {
      title: "something cool.",
      description:
        "the description for the feature the description for the feature the description for the feature the description for the feature the description for the feature",
    },
    {
      title: "something cool.",
      description:
        "the description for the feature the description for the feature the description for the feature the description for the feature the description for the feature",
    },
  ];

  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is now and you just have to realize it. Step into future
          today and make it happen.
        </h1>
        <p>Request early access to get started.</p>
      </div>
      <div className="gpt3__features-container">
        {
            featuresData.map((item,index) => (
          <Feature title={item.title} text={item.description} key={index}/>
        ))
    }
      </div>
    </div>
  );
}
export default Features;
