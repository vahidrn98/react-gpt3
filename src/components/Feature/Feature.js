import "./Feature.css";

function Feature(props) {

    const {title,text} = props;

 return (
 <div className="gpt3__features-container_feature">
    <div className="gpt3__features-container_feature-title">
        <div/>
        <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
       <p>{text}</p>
    </div>
 </div>
);}
export default Feature;