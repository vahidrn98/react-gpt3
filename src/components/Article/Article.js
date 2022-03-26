import "./Article.css";

function Article({imageURL,date,title}) {
 return (
 <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
        <img src={imageURL} alt={imageURL} />
    </div>
    <div className="gpt3__blog-container_article-content">
        <div>
            <p>{date}</p>
            <h3>{title}</h3>
        </div>
        <p>Read full article</p>
    </div>
 </div>
);}
export default Article;