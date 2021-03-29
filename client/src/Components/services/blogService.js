
import { today } from './bookService';
import { sendRequest } from './server'

function sendToServer(data) {
    const blogContent = compileBody(data);
    return sendRequest('/blog/add-blog-post', blogContent, ['Post', 'application/json']);
}

function compileBody(data) {
    const blogContent = JSON.stringify({
        title: data[0],
        author: data[1],
        createdOnDate: today,
        imageUrl: data[2],
        content: data[3]
    });
    return blogContent;
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
    sendToServer,
    getPosts,
    getOnePost,
    updatePostWithComment
}