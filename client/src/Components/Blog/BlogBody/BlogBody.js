import BlogTitle from './BlogTitle/BlogTitle';
import BlogSummary from './BlogSummary/BlogSummary';
import BlogFooter from './BlogFooter/BlogFooter';

const BlogBody = (props) => {
    console.log(props);
    const {title, content, author, createdOnDate} = props.post;
    return (
        <div className="blog-body">
            <BlogTitle title={title}/>
            <BlogSummary content={content}/>
            <BlogFooter author={author} createdOnDate={createdOnDate}/>
            <style>
                {`
       .blog-body {
        margin: 0 auto;
        margin-top: 5px;
        width: 80%;
        border-bottom: 1px solid black;
 `}
            </style>
        </div>
    );

}
export default BlogBody;