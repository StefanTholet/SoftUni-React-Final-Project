import { Grid } from "@material-ui/core";
import Comment from './Comment';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from "react";
import { updatePostWithComment } from '../../services/blogService';
import { today } from '../../services/bookService';
import { withRouter } from 'react-router-dom';



const CommentsSection = (props) => {
  const currentLocation = window.location.origin;
  const [wantsToComment, setCommentDecision] = useState(false);
  const comments = props.post.comments
  const showCommentBox = () => {
      setCommentDecision(!wantsToComment);
  }

  const submitComment = (e) => {
    e.preventDefault();
    const { postId } = props.match.params;
    const content = e.target.comment.value;
    const comment = {
        author: 'Stefan',
        avatar: `${currentLocation}/profile.jpeg`,
        content,
        postedOnDate: today
    }
    updatePostWithComment(postId, comment)
        .then('Success!')
        .catch(err => console.log(err))
}

  return (
    <Grid style={{ width: '100%' }}>
      <h1>Comments</h1>
      <Button style={{marginBottom: '2.5rem'}}
       variant="contained"
       onClick={showCommentBox}
       >
       Tell us what you think</Button>
       {wantsToComment ? <Comment bool={true} /> : null}
       { comments ? 
        comments.map(x => 
       <Comment submitComment={submitComment}
         content={x.content}
         author={x.author}
         avatar={x.avatar}
         postedOnDate={x.postedOnDate}
         key={x._id}
       />)
       :null
       }
     </Grid>
  );
}

export default withRouter(CommentsSection);