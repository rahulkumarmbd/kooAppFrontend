import { EditProfile } from "./koo_app/components/Edit-profile/EditProfile";
import { Routes, Route } from "react-router-dom";
import KooHomePage from "./koo_app/kooHomePage";
import KooFeedPage from "./koo_app/kooFeedPage";
import CreatePostPage from "./koo_app/postCreatePage";
import { EmailVerification } from "./EmailVerification.js";
import Profile from "./koo_app/userProfile";
export const Check = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<KooHomePage />}></Route>
        <Route path="/feed" element={<KooFeedPage />}></Route>
        <Route path="/login" element={<EmailVerification />}></Route>
        <Route path="/create" element={<CreatePostPage />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/editProfile/:id" element={<EditProfile />}></Route>
      </Routes>
    </div>
  );
};
