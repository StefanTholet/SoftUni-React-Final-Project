
const BlogFooter = () => {
    return (
        <div className="blog-footer">
            <ul>
                <li className="published-date">2 days ago</li>
                <li className="comments"><a >Comments</a></li>
                <li className="shares"><a>Shares</a></li>
            </ul>
            <style jsx>{`
        .blog-footer {
    border-top: 1px solid #e6e6e6;
    margin: 0 auto;
    padding-bottom: 0.125rem;
    width: 80%;
}
        `}</style>
        </div>
    );
}

export default BlogFooter