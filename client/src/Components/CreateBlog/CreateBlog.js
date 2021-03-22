import BlogHeader from './BlogHeader/BlogHeader';
import BlogTextArea from './BlogTextArea/BlogTextArea';

import { sendToServer } from '../services/blogService';
const CreateBlog = () => {
    const submitPost  = (event) => {
        event.preventDefault();
        const formInputs = [...event.target.elements].map(x => x.value);
        sendToServer(formInputs)
    }
    return (
        <form className="blog-form" onSubmit={(event) => submitPost(event)}>
            <div className="blog-wrapper">
            <BlogHeader value={"Blog Title"} />
            <BlogHeader value={"Author"} />
            <BlogHeader value={"Image URL"} />
			<BlogTextArea value ={"Message"}/>
			<div className="col-xs-12">
				<input type="submit" className="btn-lrg submit-btn" value="Send Post" />
                </div>
            </div>
            <style jsx>
            {`
            .blog-form {
    display: flex;
    justify-content: center;
}

.blog-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
}

.blog-wrapper {
    flex-basis: 100%;
}
`}
            </style>
	</form>
    );
}

export default CreateBlog;