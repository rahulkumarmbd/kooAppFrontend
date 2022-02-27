import { CreatePost } from "./components/create_post/createPost";
import { useSelector } from "react-redux";
import {Navigate} from 'react-router-dom'
const CreatePostPage = () => {
  const {IsAuth} = useSelector((store) => store);
  return IsAuth?(
      <CreatePost />
  ):(<Navigate to="/login" />);
};
export default CreatePostPage;
