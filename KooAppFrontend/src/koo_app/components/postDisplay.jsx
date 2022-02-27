// asjbc,jh

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import {ThreeDots} from './utilityComp.jsx'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

export default function RecipeReviewCard() {
  const [posts, setPosts] = useState([]);
  // Toggling Like and Dislike by below state
  const [toggleLike, setToggleLike] = useState(false); 
  const { IsAuth, User } = useSelector((store) => store);
  useEffect(() => {
    axios.get("https://kooappclone.herokuapp.com/posts").then(({ data }) => {
      setPosts(data.reverse());
    });
  }, [posts]);

  useEffect((like, id)=>{
    likeHandle(like, id)
  },[])

async function likeHandle(like,id){
    await axios.patch(`https://kooappclone.herokuapp.com/posts/${id}`,{likes: toggleLike && like>0? --like:++like}).then(setToggleLike(!toggleLike))
  }
  if (!IsAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      {posts.length
        ? posts.map((post) => {
            return (
              <Card
                sx={{
                  position: 'relative',
                  top:'-100vh',
                  maxWidth: 750,
                  borderColor: "gray",
                  marginLeft: "20.5vw",
                  paddingBottom: "20px",
                  marginBottom: "20px",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500], alignContent: "left" }}
                      aria-label="recipe"
                    >
                      <img
                        height="50px"
                        src={post.userId.profilePic || 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'}
                        alt="userImage"
                      />
                    </Avatar>
                  }
                  title={post.userId.name != "null" ? post.userId.name : "New User"}
                  subheader={`@${
                    post.userId.handle != "null" ? post.userId.handle : "username"
                  }  ${
                    post.userId.profession != "null" ? post.userId.profession : ""
                  }`}
                />
                {/* <span style={{postion:'relative'}} >{ThreeDots()}</span> */}
                <CardContent>
                  <Typography
                    sx={{
                      maxWidth: "90%",
                      marginLeft: "20px",
                      fontSize: "1.2rem",
                    }}
                    variant="body2"
                    color="text.primary"
                  >
                    {post.description}
                  </Typography>
                </CardContent>
                <CardMedia
                  sx={{ maxWidth: "90%", margin: "auto" }}
                  component="img"
                  image={post.postImgs[0]}
                  alt="Paella dish"
                />
                <CardActions
                  sx={{
                    maxWidth: "90%",
                    margin: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <p className="likes-count" onClick={()=>likeHandle(post.likes, post._id)}>
                  <img
                    height="25px"
                    src={toggleLike? "/assets/images/like-1.svg":"/assets/images/like.svg"}
                    alt="Logout"
                    /><span>{post.likes>0? post.likes:''}</span>
                    </p>

                  <img
                    height="25px"
                    src="/assets/images/comment.svg"
                    alt="Logout"
                  />
                  <img height="25px" src="/assets/images/re.svg" alt="Logout" />
                  <img
                    height="25px"
                    src="/assets/images/WhatsApp.svg"
                    alt="Logout"
                  />
                  <img
                    height="25px"
                    src="/assets/images/dropdown-menu-1.svg"
                    alt="Logout"
                  />
                </CardActions>
                {/* <commentButton /> */}
              </Card>
            );
          })
        : "...loading"}
    </div>
  );
}
