import "./style.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { KooPostDone } from "./postDoneFeedback.jsx";
import { Navigate } from "react-router-dom";

export const CreatePost = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [desc, setDesc] = useState("");
  const [posted, setPosted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { IsAuth, User } = useSelector((store) => store);

  const postData = () => {
    var formData = new FormData();
    formData.append("userId", User);
    formData.append("postImgs", selectedImage);
    formData.append("description", desc);
    axios
      .post(`https://kooappclone.herokuapp.com/posts/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setLoading(true);
          setPosted(true);  
      })
      .catch((err) => console.log(err));
  };
if(posted){
  return <Navigate to="/feed" />;
}
  return loading ? (
    <KooPostDone />
  ) : (
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
