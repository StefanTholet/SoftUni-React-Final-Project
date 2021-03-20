import { Route } from "react-router"
import BlogHeader from './BlogHeader/BlogHeader';
import BlogBody from './BlogBody/BlogBody';
const Blog = (props) => {

    return (
        <div className="blog-container">
            <BlogHeader />
            <BlogBody />
            <style jsx>
                {`
                .blog-container {
    background: #fff;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 20%) 0 4px 2px -2px;
    font-family: "adelle-sans", sans-serif;
    font-weight: 100;
    margin: 48px auto;
    width: 50%;
    
}
        `}
            </style>
        </div>
    );
}

export default Blog;