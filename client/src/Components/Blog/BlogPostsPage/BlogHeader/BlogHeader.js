import { Link } from 'react-router-dom';

const BlogHeader = (props) => {
    console.log(props.post.imageUrl)
    return  (
        <div className="blog-header" >
                <Link to={`/blog/posts/${props.post._id}`}>
                <div className="blog-cover" style={{backgroundImage: `url(${props.post.imageUrl})`}}>
                </div>
                </Link>
                <style>
        {`
    .blog-cover {    
    background-size: cover;
    border-radius: 5px 5px 0 0;
    height: 15rem;
    box-shadow: inset rgb(0 0 0 / 20%) 0 64px 64px 16px;
}
`}
</style>
            </div>
        );
       
}
export default BlogHeader;