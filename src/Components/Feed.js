import React, { useState, useEffect } from "react";
import "../Views/Feed.css";
import StoryReel from "../Components/StoryReel";
import MessageSender from "../Components/MessageSender";
import Post from "../Components/Post";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed ">
      <StoryReel></StoryReel>
      <MessageSender></MessageSender>
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        ></Post>
      ))}

    </div>
  );
}

export default Feed;
