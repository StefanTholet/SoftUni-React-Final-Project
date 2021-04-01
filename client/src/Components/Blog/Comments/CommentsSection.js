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
        .then(res => {
          setCommentDecision(!wantsToComment)
          props.history.push(`/blog/read-more/${postId}`)
        })
        .catch(err => console.log(err))
}

  return (
    <Grid style={{ width: '100%' }}>
      <h1>Comments</h1>
      <Button style={{marginBottom: '2.5rem'}}
       variant="contained"
       onClick={showCommentBox}
       >
       {comments ? 'Tell us what you think' : 'Be the first person to comment!'}</Button>
       {wantsToComment ? <Comment bool={true} submitComment={submitComment} /> : null}
       { comments ? 
        comments.map(x => 
       <Comment 
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