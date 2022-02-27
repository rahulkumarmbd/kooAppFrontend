import { CreatePost } from "./components/create_post/createPost";
import { KooPostDone } from "./components/create_post/postDoneFeedback.jsx";

const CreatePostPage = () => {
  return (
    <>
      <KooPostDone />
      <CreatePost />
    </>
  );
};
export default CreatePostPage;
