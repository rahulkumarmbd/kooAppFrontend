import { EmailVerificationPopup } from './koo_app/components/otp-verification/EmailVerification'
import { PhoneVerificationPopup } from './koo_app/components/otp-verification/PhoneVerification'
import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContextProvider";
import { VerificationContext } from "./koo_app/components/Context/verificationContextProvider";
import { VerifyOtp } from './koo_app/components/otp-verification/VerifyOtp';
import { EditProfile } from './koo_app/components/Edit-profile/EditProfile';
import {Routes, Route} from 'react-router-dom'
import KooHomePage from './koo_app/kooHomePage';
import KooFeedPage from './koo_app/kooFeedPage';
import CreatePostPage from './koo_app/postCreatePage';
import Profile from './koo_app/userProfile';
export const Check = () => {
    const {
        checkOtp,
        mobilePopup,
        cred,
        credData,
        otp
      } = useContext(VerificationContext);

    return(
        <div className="App">
            <Routes>
               <Route path='/' element={<KooHomePage />}></Route> 
               <Route path='/feed' element={<KooFeedPage />}></Route> 
               <Route path='/create' element={<CreatePostPage />}></Route> 
               <Route path='/profile/id' element={<Profile />}></Route> 
               <Route path='/editProfile/id' element={<EditProfile />}></Route> 
            </Routes>
        </div>
    )
}