import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './custom.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const TextEditor = ({ onSubmit, onChange }) => {

    return (
        <form onSubmit={onSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}>
            <CKEditor
                onChange={onChange}
                editor={ClassicEditor}
                config={
                    {
                        ckfinder: {
                            uploadUrl: 'http://localhost:5000/blog/uploads'
                        },
                        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
                        heading: {
                            options: [
                                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                            ]
                        }
                    }
                }
            />
            <TextField id="outlined-basic" 
            label="Image URL" 
            variant="outlined"
            name="imageUrl"
            id="imageUrl" 
            style={{maxWidth: '30rem', margin: '0 auto', marginTop: '0.5rem'}}/>
            <Button type="submit"
                style={{ margin: '0 auto', marginTop: '0.5rem' }}
                variant="outlined">Submit</Button>
        </form>
    )
}

export default TextEditor;