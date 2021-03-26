import BlogTitle from './BlogTitle/BlogTitle';
import BlogSummary from './BlogSummary/BlogSummary';
import BlogFooter from './BlogFooter/BlogFooter';

const BlogBody = (props) => {
    const {title, content, author, createdOnDate, _id} = props.post;
    return (
        <div className="blog-body">
            <BlogTitle title={title} _id={_id}/>
            <BlogSummary content={content}/>
            <BlogFooter author={author} createdOnDate={createdOnDate}/>
            <style>
                {`
       .blog-body {
        background-color: #fff;
        margin: 0 auto;
        width: 100%;
        border-bottom: 1px solid black;
 `}
            </style>
        </div>
    );

}
export default BlogBody;