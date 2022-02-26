import { EmailVerificationPopup } from './koo_app/components/otp-verification/EmailVerification'
import { PhoneVerificationPopup } from './koo_app/components/otp-verification/PhoneVerification'
import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContextProvider";
import { VerificationContext } from "./koo_app/components/Context/verificationContextProvider";
import { VerifyOtp } from './koo_app/components/otp-verification/VerifyOtp';
import { EditProfile } from './koo_app/components/Edit-profile/EditProfile';

export const Check = () => {
    const {
        checkOtp,
        mobilePopup,
        cred,
        credData,
        otp
      } = useContext(VerificationContext);

    return(
        <div>
             <EditProfile />
        </div>
    )
}