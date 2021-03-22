import BlogHeader from './BlogHeader/BlogHeader';
import BlogBody from './BlogBody/BlogBody';

import { useState, useEffect } from 'react';
import { getPosts } from '../services/blogService';
import { reservation } from '../services/bookService';

const Blog = (props) => {
    const [blogPosts, setPosts] = useState([]);
    useEffect(() => {
        getPosts()
        .then(result => result.json())
        .then(allPosts =>  setPosts(allPosts))
        .catch(err => console.log(err))
    },[]);
   
    return (
        <div className="blog-container">
        {blogPosts.map(post => {
            return (
                <div className="single-blog">
                <BlogHeader image={post.imageUrl}/>
                <BlogBody post={post} />
                </div>
            );
        })   }
            <style jsx>
                {`
                .blog-container {
                    background: #fff;
                    border-radius: 5px;
                    box-shadow: rgb(0 0 0 / 20%) 0 4px 2px -2px;
                    font-family: "adelle-sans", sans-serif;
                    font-weight: 100;
                    margin: 48px auto;
                    width: 50%;
                }
                .single-blog {
                    margin-top: 10px
                }

        `}
            </style>
        </div>
    );
}

export default Blog;