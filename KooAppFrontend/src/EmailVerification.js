import { EmailVerificationPopup } from "./koo_app/components/otp-verification/EmailVerification";
import { PhoneVerificationPopup } from "./koo_app/components/otp-verification/PhoneVerification";
import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContextProvider";
import { VerificationContext } from "./koo_app/components/Context/verificationContextProvider";
import { VerifyOtp } from "./koo_app/components/otp-verification/VerifyOtp";

export const EmailVerification = () => {
  const { checkOtp, mobilePopup, cred, credData, otp } =
    useContext(VerificationContext);
  return (
    <div>
      {mobilePopup && !checkOtp ? (
        <PhoneVerificationPopup />
      ) : !checkOtp ? (
        <EmailVerificationPopup />
      ) : (
        <VerifyOtp cred={cred} credData={credData} otp={otp} />
      )}
    </div>
  );
};
