import BlogTitle from './BlogTitle/BlogTitle';
import BlogSummary from './BlogSummary/BlogSummary';
import BlogFooter from './BlogFooter/BlogFooter';
const BlogBody = () => {

    return (
        <div className="blog-body">
            <BlogTitle />
            <BlogSummary />
            <BlogFooter />
            <style>
                {`
       .blog-body {

        margin: 0 auto;
        width: 80%;
 `}
            </style>
        </div>
    );

}
export default BlogBody;