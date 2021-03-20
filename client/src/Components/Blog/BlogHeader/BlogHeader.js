const BlogHeader = () => {

    return  (
        <div className="blog-header">
                <div className="blog-cover">
                </div>
                <style>
        {`
    .blog-cover {    
    background: url(slide_4.jpg);
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