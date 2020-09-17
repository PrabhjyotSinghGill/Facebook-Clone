import React from "react";
import "../Views/Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar"></Avatar>
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt=" "></img>
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon></ThumbUpIcon>
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon></NearMeIcon>
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon></AccountCircleIcon>
          <ExpandMoreOutlined></ExpandMoreOutlined>
        </div>
      </div>
    </div>
  );
}
export default Post;
