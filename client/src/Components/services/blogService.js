
// import { today } from './bookService';
import { sendRequest } from './server'

function compileBlogPost(postData) {
    const regextPatterns = {
        heading: /<h[0-6]>.*<\/h[0-6]>/gm,
        content: /<p>.*<\/p>/gm
    };
    const title = postData.content.match(regextPatterns.heading);
    const content = postData.content.split(regextPatterns.heading);
    content.splice(content.indexOf(''), 1)
    const post = {
       title,
       content,
       author: postData.author,
       createdOn: postData.createdOn,
       imageUrl: postData.imageUrl,
       _id: postData._id
    }
    console.log(postData)
    return post
}

function sendToServer(data) {
    // const blogContent = compileBody(data);
    const blogContent = JSON.stringify({ content: data.content, imageUrl: data.imageUrl });
    return sendRequest('/blog/add-blog-post', blogContent, ['Post', 'application/json']);
}


function getOnePost(postId) {
    return sendRequest(`/blog/posts/${postId}`)
}

function getPosts(params) {
    return sendRequest('/blog/all-posts')
}

function updatePostWithComment(postId, comment) {
    const requestUrl = `/blog/posts/${postId}/submit-comment`;
    const commentData = JSON.stringify(comment);
    const options = ['Post', 'application/json'];
    return sendRequest(requestUrl, commentData, options)
}

export {
    compileBlogPost,
    sendToServer,
    getPosts,
    getOnePost,
    updatePostWithComment
}