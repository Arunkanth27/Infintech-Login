import React, { useState } from 'react';
import Post from './Post';
import PostCreation from './PostCreation';
import '../../components/Global.css'

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'Question',
      author: 'John Doe',
      content: 'Just finished a cool project using React! Check it out and let me know your thoughts.',
      image: '/sample-post.jpg',
      time: '10 mins ago',
    },
    {
      id: 2,
      type: 'Collaboration',
      author: 'Jane Smith',
      content: 'Looking for collaborators on a new AI project. Anyone interested? Feel free to message me!',
      image: null,
      time: '30 mins ago',
    },
  ]);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <section className="feed">
      <h2 className="feed__title">Welcome to the Tech Family</h2>

      {/* Post Creation Section */}
      <PostCreation addNewPost={addNewPost} />

      {/* Feed Posts */}
      <div className="feed__posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Feed;
