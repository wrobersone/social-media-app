import React from 'react';
import './feed.css';
import Posts from './post/posts/Posts';
import PostShare from './post/PostShare';

const Feed = () => {
  return (
    <div className="feed">
      <PostShare />
      <Posts />
    </div>
  );
};

export default Feed;
