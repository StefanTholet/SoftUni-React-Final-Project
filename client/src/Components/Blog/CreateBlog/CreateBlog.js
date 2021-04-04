import HeroImage from '../../HeroImage/HeroImage';
import TextEditor from './TextEditor/TextEditor';
import { sendRequest } from '../../services/server';
import { useState, useEffect } from 'react';
import { compileBlogPost } from '../../services/blogService';
import { today } from '../../services/bookService';
import { withRouter } from 'react-router-dom';
import BlogPost from '../ReadBlogPost/BlogPost';
import Grid from '@material-ui/core/Grid';

const CreateBlog = (props) => {
    const [body, setBody] = useState(null)
    const [preview, setPreview] = useState(false);

    const [imageUrl, setImageUrl] = useState('');
    const onImageUrlInputChangeHandler = (e) => {
        setImageUrl(e.target.value)
    }

    const { user, author, history } = props;

    if (!user) {
        history.push('/login')
    }

    useEffect(() => {
        if (preview && body) {
            const post = compileBlogPost(
                {
                    content: body,
                    imageUrl,
                    author,
                    createdOn: today,
                    _id: user._id
                })
            setBody(post)
        }
    }, [preview])

    const submitPost = (e) => {
        e.preventDefault();
        sendRequest('/blog/add-blog-post', { ...body }, ['POST', 'application/json'])
            .then(res => console.log(res))
    }
    const onTextEditorChangeHandler = (e, editor) => {
        const data = editor.getData();
        setBody(data)
    }

    const onPreviewPostBtnClick = () => {
            setPreview((currentPreview) => (!currentPreview))
    }

    return (
        <Grid>
            <HeroImage image={'createBlog.jpg'} />
            <TextEditor onTextEditorChange={onTextEditorChangeHandler}
                onSubmit={submitPost} onPreview={onPreviewPostBtnClick}
                onImageUrlInputChangeHandler={onImageUrlInputChangeHandler}
            />
            {preview ?
                <BlogPost post={{ ...body }} />
                : null
            }
        </Grid>
    );
}

export default withRouter(CreateBlog);