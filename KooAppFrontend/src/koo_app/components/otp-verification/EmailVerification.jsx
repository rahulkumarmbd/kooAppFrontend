import './phoneVerificationPopup.css';
import { useContext, useState } from 'react';
import { VerificationContext } from "../Context/verificationContextProvider";
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

export function EmailVerificationPopup(){
    const [email,setEmail] = useState("")
    const [btnVerify,setBtnVerify] = useState(false)

    function setEmailonChange(value){
        setEmail(value)
    }
    const {
        candlePopup,
        handleCred,
        handleCredData,
        handleCheckOtp,
        handleOtp
      } = useContext(VerificationContext);
    const handleEmailOtp = () =>{
        axios.post("https://kooappclone.herokuapp.com/gmailotp",{
                email: email
            }).then((resp) =>{
                handleOtp(resp.data.otp);
                handleCredData(email)
                handleCred(email)
                handleCheckOtp(true)
            })
    }
    
    return (
        <div className="popupDiv">
            <div className='headDiv'>
                <p>Email Sign-in </p>
                <button><img src = "/assets/images/close.svg"/></button>
            </div>
            <input onChange = {(e) => setEmailonChange(e.target.value)} className='emailInput' type="email"/>
            <div className='hrDiv'>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <p onClick = {() => candlePopup(true)} className='changeAnchor mobile'>Sign In With Mobile Number</p>
            <ReCAPTCHA
                style={email ? null : { display: "none" }}
                className='recaptcha'
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={() => setBtnVerify(true)}
            />
            <button
               disabled = {!btnVerify}
               style={email ? {marginTop: "2.5rem"} : { marginTop: "7.5rem" }} 
               onClick = {() => handleEmailOtp}
               className='sendBtn'>Send OTP</button>
        </div>
    )
}