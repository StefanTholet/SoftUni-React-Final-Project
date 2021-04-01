import HeroImage from '../../HeroImage/HeroImage';
import TextEditor from './TextEditor/TextEditor';
import { sendToServer } from '../../services/blogService';
import { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';


//TODO Submit button change logic of the submit post function so that it takes all the info from the content state - heading as title, <a> tag as the imageUrl and so on
const CreateBlog = () => {
    const [content, setContent] = useState('')

    const submitPost = (event) => {
        event.preventDefault();
        const imageUrl = event.target
        console.log(event.target.imageUrl.value)
       // sendToServer(content)
    }
    const onTextEditorChangeHandler = (e, editor) => {
        const data = editor.getData();
        console.log(document.querySelector('.ck-editor__editable'));
      
        setContent(data)
    }
 
    return (
        <>
            <HeroImage image={'writeBlog2.jpg'} />
            <TextEditor onChange={onTextEditorChangeHandler}
                onSubmit={submitPost}
            />
            <div>{ ReactHtmlParser(content) }</div>;
        </>
    );
}

export default CreateBlog;