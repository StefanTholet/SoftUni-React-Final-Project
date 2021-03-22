const BlogTextArea = (props) => {
    return (

        <div className="input-container">
            <textarea placeholder={props.value} required className="blog-text-area"></textarea>
            <style jsx>{`
            .blog-text-area {
                padding-block: 10px;
						margin-bottom: 5px;
                        margin-top: 15px;
						width: min(90% , 800px);
                        min-height: 400px;
                        margin: 0 auto;      
            }
            `}</style>
        </div>
    );
}


export default BlogTextArea;