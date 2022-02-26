import { useState } from 'react';
import './phoneVerificationPopup.css';
import { useContext } from 'react';
import { VerificationContext } from "../Context/verificationContextProvider";

export function VerifyOtp({ cred, credData, otp}) {

    const {
        handleCheckOtp
      } = useContext(VerificationContext);

    const [inputOtp, setInputOtp] = useState("")
    const handleChecking = () => {
        if (otp == inputOtp){
            console.log("valid")
        }
    }
    return (
        <div className='popupDiv'>
            <div className='headDiv header'>
               <button onClick={() => handleCheckOtp(false)}><img src = "/assets/images/back.svg"/></button>
               <p>Otp Sent to {credData}</p>
               <button><img src = "/assets/images/close.svg"/></button>
            </div>
            <p className='changeAnchor edit'>Edit {cred}</p>
            <input 
                onChange={(e) => setInputOtp(e.target.value)}
                className='emailInput changeSize' type="number"/>
            <p className='changeAnchor resend'>Re-send Otp</p>
            <p className='otpArrives'>OTP usually arrives within 1 minute</p>
            <button
               onClick= {() => handleChecking()}
               className='sendBtn proceed'>Proceed</button>
        </div>
    )
}