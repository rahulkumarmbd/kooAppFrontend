import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useEffect, useState } from "react";
import {Link } from 'react-router-dom';
import axios from "axios"
import './utiltiyStyle.css';

export const ThreeDots = () => {
  return (
    <svg
      style={{ height: "20px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-three-dots-vertical"
      viewBox="0 0 16 16"
    >
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </svg>
  );
};

function TotalAvatars() {
  return (
    <AvatarGroup total={4}>
      <Avatar sx={{height:25, width:25}} alt="Mujaffar" src="/assets/profilepics/muj.jpg" />
      <Avatar sx={{height:25, width:25}} alt="Rahul" src="/assets/profilepics/rahul.jpg" />
      <Avatar sx={{height:25, width:25}} alt="Rohan" src="/assets/profilepics/rohan.jpg" />
      <Avatar sx={{height:25, width:25}} alt="Sandeep" src="/assets/profilepics/sandeep.jpg" />
    </AvatarGroup>
  );
}

export const TrendTag=(tagname)=>{

    return (
        <div className="body-tags">
            {/* <hr></hr> */}
        <div className="tagname">
          <p className="title">#{tagname}</p>
          <div className="addbutton">
              <h3>+</h3>
          </div>
        </div>
        <div className="images">
        {TotalAvatars()}
        </div>
      </div>
    )
}

export const Trendinghashtags = () => {
  return (
      <>
    <div className="main-div">
      <div className="hashtag-heading">
        <p> Trending Hashtags</p>
      <hr></hr>
      </div>
      {TrendTag('worldwar3')}
      {TrendTag("masai_school")}
      {TrendTag("putin")}
      {TrendTag("developers")}
      {TrendTag("tera_bhai")}
    </div>
      <div className="about-section">
          <span>About</span>
          <span>Press</span>
          <span>Contact</span>
          <span>Resource Center</span>
          <span>Stamps</span>
          <span>FAQs</span>
      </div>
      </>
  );
};

export const UserProfile=()=>{
    const [user, setUser]=useState('');
    useEffect(() => {
        axios.get("https://kooappclone.herokuapp.com/users/621655ecbf65aa3f1bab6498").then(({ data }) => {
          setUser(data);
          console.log(user)
        });
      }, []);

    return (
        <div className="user-main-div">
            <div className="user-avatar">
                <img src={user.profilePic} />
                <span className="edit-div"><Link to='/editProfile/id'>Edit Profile</Link></span>
            </div>
            <div className="details">
            <h3 className="userId">{user.name}</h3>
            <p>@{user.name}</p>
            </div>
            <div className="other-details">
                <p className="koo-opinion">Koo Your Opinion!</p>
                <p>Joined On {user.createdAt}</p>
                <div className="followers">
                    <div className="left">
                    <p>2 Followers</p>
                    <div className="left-img">{TotalAvatars()}</div>
                    </div>
                    <div className="right">
                    <p>20 Following</p>
                    {TotalAvatars()}
                    </div>
                </div>
            </div>
        </div>
    )
}