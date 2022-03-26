import "./Blog.css";
import { Article } from "../../components";
import { images } from "./imports";

function Blog() {

    const [firstArticle,...restOfTheArticles] = images;

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
            <Article imageURL={firstArticle} date="2022/5/7" title="Something interesting to read"/>
        </div>
        <div className="gpt3__blog-container_groupB">
            {
                restOfTheArticles.map((image)=>(
                    <Article imageURL={image} date="2022/5/7" title="Something interesting to read"/>
                ))
            }
        </div>
      </div>
    </div>
  );
}
export default Blog;
