import { createContext, useState } from "react";

export const VerificationContext = createContext();

export const VerificationContextProvider = ({ children }) => {
  const [mobilePopup, setMobilePopup] = useState(true);
  const [cred, setCred] = useState("")
  const [credData, setCredData] = useState("")
  const [checkOtp, setCheckOtp] = useState(false);
  const [otp, setOtp] = useState("")


  const candlePopup = (data) => {
    setMobilePopup(data);
  };

  const handleCheckOtp = (data) => {
    setCheckOtp(data);
  };

  const handleCred = (data) => {
    setCred(data);
  };
  const handleCredData = (data) => {
    setCredData(data);
  };

  return (
    <VerificationContext.Provider
      value={{ mobilePopup,candlePopup,cred,handleCred,credData,handleCredData,checkOtp,handleCheckOtp,otp,setOtp }}
    >
      {children}
    </VerificationContext.Provider>
  );
};
