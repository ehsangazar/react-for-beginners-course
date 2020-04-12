import React, { useState, useEffect } from 'react'
import POSTS from './POSTS.json'
import Button from './../Button/Button'

const Blog = () => {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const handleLoadPosts = () => {
    setLoading(true)
    setLoaded(true)
    setTimeout(() => {
      setPosts(POSTS);
      setLoading(false);
    }, 1000)
  };

  useEffect(() => {
    console.log("useEffect");
    handleLoadPosts();
  }, []);

  useEffect(() => {
    console.log("loaded changed");
  }, [loaded]);

  return (
    <div>
      <Button handleClick={handleLoadPosts}>
        {loading ? 'Loading' :'Load Posts into State'}
      </Button>
      {posts.length === 0 && <div>No Posts</div>}
      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;