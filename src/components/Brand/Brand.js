import "./Brand.css";
import {brands} from "./images";

function Brand() {

  return (
    <div className="gpt3__brand section__padding">
      {brands.map((brand) => (
        <img src={brand} alt="google" />
      ))}
    </div>
  );
}
export default Brand;
