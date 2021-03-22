
const BlogTitle = ({ title }) => {
    return (
        <div className="blog-title">
            <h1><a href="#">{title}</a></h1>
            <style jsx>{`
            .blog-title a {
                color: black;     
            }
        `}</style>
        </div>
    );
}

export default BlogTitle