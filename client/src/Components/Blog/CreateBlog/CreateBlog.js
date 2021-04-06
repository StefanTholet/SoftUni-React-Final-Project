import HeroImage from '../../HeroImage/HeroImage';
import TextEditor from './TextEditor/TextEditor';
import { sendRequest } from '../../services/server';
import { useState, useEffect, useRef } from 'react';
import { decodeBlogPost } from '../../services/blogService';
import { today } from '../../services/bookService';
import { withRouter } from 'react-router-dom';
import BlogPost from '../ReadBlogPost/BlogPost';
import Grid from '@material-ui/core/Grid';


const CreateBlog = (props) => {
    const { user, author, history } = props;

    if (!user) {
        history.push('/login')
    }
    const [body, setBody] = useState('')
    const [preview, setPreview] = useState(false);
    const [post, setPost] = useState({})

    const [imageUrl, setImageUrl] = useState('');
    const onImageUrlInputChangeHandler = (e) => {
        setImageUrl(e.target.value)
    }

    const postPreview = useRef();

    useEffect(() => {
        if (preview && body) {
            setPost(decodeBlogPost(
                compileBlogPost()))
            postPreview.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [preview])

    const compileBlogPost = () => {
        return {
            content: body,
            imageUrl,
            author,
            createdOn: today,
            _id: user._id
        }
    }

    const submitPost = (e) => {
        e.preventDefault();
        sendRequest('/blog/add-blog-post', JSON.stringify(compileBlogPost()), ['POST', 'application/json'])
            .then(res => console.log(res))
    }
    const onTextEditorChangeHandler = (e, editor) => {
        const data = editor.getData();
        setBody(data)
    }

    const onPreviewPostBtnClick = () => {
        return setPreview((currentPreview) => (!currentPreview));
    }

    return (
        <Grid>
            <HeroImage image={'createBlog.jpg'} />
            <TextEditor onTextEditorChange={onTextEditorChangeHandler}
                onSubmit={submitPost} onPreview={onPreviewPostBtnClick}
                onImageUrlInputChangeHandler={onImageUrlInputChangeHandler}
            />
            <Grid >
                {preview ?
                    <BlogPost post={{ ...post }} />
                    : null
                }
                <div ref={postPreview} />
            </Grid>
        </Grid>
    );
}

export default withRouter(CreateBlog);