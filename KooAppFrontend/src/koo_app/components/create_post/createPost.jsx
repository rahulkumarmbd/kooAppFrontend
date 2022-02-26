import "./style.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { KooPostDone } from "./postDoneFeedback.jsx";

export const CreatePost = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  
  const postData = () => {
    axios
      .post("https://kooappclone.herokuapp.com/posts", {
        userId: "62164f6597c96bb81c23f8bb",
        description: desc,
        postImgs: selectedImage || selectedVideo,
        likes: 0,
        comments: [],
      })
      .then((res) => {
        setLoading(true);
        console.log("Your data is posted", res);
        // Hare write code to redirect on feed page after post success
      })
      .catch((err) => console.log(err));
  };

  return loading? (<KooPostDone />) :(
    <div className="main-container">
      <div className="top-nevigation">
        <div className="left-icons">
          <img src="/assets/create-post-icons/back.svg" alt="back" />
          <img src="/assets/create-post-icons/user.svg" alt="user" />
        </div>
        <div onClick={postData} className="post-button">
          <img src="/assets/create-post-icons/post.svg" alt="post" />
          <span>Post</span>
        </div>
      </div>
      <div className="add-language-div">
        <img src="/assets/create-post-icons/svgexport-1.svg" />
        <span>English</span>
      </div>
      <div className="input-text">
        <textarea
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          placeholder="What's on your mind..."
        />
        <span>
          <img src="/assets/create-post-icons/audio.svg" />
        </span>
      </div>
      <div className="tools-control">
        <input
          type="file"
          id="upload-btn"
          onChange={(event) => setSelectedImage(event.target.files[0])}
          style={{ display: "none" }}
        />
        <label htmlFor="upload-btn">
          <img
            height="30px"
            src="/assets/create-post-icons/browse.svg"
            alt="browse"
          />
        </label>
        <input
          type="file"
          id="upload-btn"
          onChange={(event) => setSelectedVideo(event.target.files[0])}
          style={{ display: "none" }}
        />
        <label htmlFor="upload-btn">
          <img
            height="30px"
            src="/assets/create-post-icons/video.svg"
            alt="video"
          />
        </label>
        <img
          height="30px"
          src="/assets/create-post-icons/link.svg"
          alt="link"
        />
        <img
          height="30px"
          src="/assets/create-post-icons/polls.svg"
          alt="polls"
        />
        <span>{desc.length}/400</span>
      </div>
    </div>
  );
};
