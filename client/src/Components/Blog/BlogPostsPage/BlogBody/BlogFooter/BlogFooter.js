
const BlogFooter = ({ author, createdOnDate }) => {
    return (
        <div className="blog-footer">
            <ul>
                <li className="published-date">Author: {author}</li>
                <li className="comments"><a >Created on: {createdOnDate}</a></li>
            </ul>
            <style jsx>{`
        .blog-footer {
    border-top: 1px solid #e6e6e6;
    margin: 0 auto;
    padding-bottom: 0.125rem;
    width: 80%;
},
    .blog-footer a {
        color: black;
    }
        `}</style>
        </div>
    );
}

export default BlogFooter