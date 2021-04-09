import HeroImage from '../../HeroImage/HeroImage';
import TextEditor from './TextEditor/TextEditor';

import { useState, useEffect, useRef, useContext } from 'react';
import UserContext from '../../Contexts/UserContext';
import TokenContext from '../../Contexts/TokenContext'
import { addBlogPost, decodeBlogPost } from '../../services/blogService';
import { today } from '../../services/bookService';
import { withRouter } from 'react-router-dom';
import BlogPost from '../ReadBlogPost/BlogPost';
import Grid from '@material-ui/core/Grid';


const CreateBlog = ({ history }) => {
    const [user, setUser] = useContext(UserContext);
    const  author  = `${user?.firstName} ${user?.lastName}`;
    const [ token ] = useContext(TokenContext)

    useEffect(() => {
        if (!user && !token) {
            history.push('/login')
        }
    })
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
            userId: user._id
        }
    }

    const submitPost = (e) => {
        e.preventDefault();
        const body = compileBlogPost();
        addBlogPost(body)
            .then(updatedUser =>{   
                setUser(updatedUser)})
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