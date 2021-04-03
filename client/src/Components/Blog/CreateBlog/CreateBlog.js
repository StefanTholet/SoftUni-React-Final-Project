import HeroImage from '../../HeroImage/HeroImage';
import TextEditor from './TextEditor/TextEditor';
import { sendRequest } from '../../services/server';
import { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { today } from '../../services/bookService';
import { withRouter } from 'react-router-dom';

const CreateBlog = (props) => {
    const [body, setBody] = useState({})

    const { user, author, history } = props;

    useEffect(() => {
        if (!user) {
            history.push('/login')
        }
    })

    const submitPost = (event) => {
        event.preventDefault();
        const imageUrl = event.target.imageUrl.value;
        const blogData = JSON.stringify({
            content: body,
            imageUrl,
            creator: user._id,
            author,
            createdOn: today
        });
        sendRequest('/blog/add-blog-post', blogData, ['POST', 'application/json'])
            .then(res => console.log(res))
    }
    const onTextEditorChangeHandler = (e, editor) => {
        const data = editor.getData();
        console.log(document.querySelector('.ck-editor__editable'));
        setBody(data)
    }

    return (
        <>
            <HeroImage image={'writeBlog2.jpg'} />
            <TextEditor onChange={onTextEditorChangeHandler}
                onSubmit={submitPost}
            />
            <div>{ReactHtmlParser(body)}</div>;
        </>
    );
}

export default withRouter(CreateBlog);