import { Link } from 'react-router-dom';

const BlogTitle = ({ title, _id }) => {
    return (
        <div className="blog-title">
            <Link to={`/blog/posts/${_id}`}>
                <h1>{title}</h1>
            </Link>
            <style jsx>{`
            .blog-title a {
                color: black;     
            }
        `}</style>
        </div>
    );
}

export default BlogTitle