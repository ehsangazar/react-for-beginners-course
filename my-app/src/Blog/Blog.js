import React, { useState, useEffect } from 'react'
import './Blog.css'

const Blog = () => {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)

  const loadPosts = async () => {
    setLoading(true)
    const responsePosts = await fetch('http://www.mocky.io/v2/5e9278be3100005b00462cbd');
    const posts = await responsePosts.json()
    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  },[])

  return (
    <div className="Blog">
      {loading && <div>Loading</div>}
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