import axios from 'axios';
import { useState } from 'react';
import './phoneVerificationPopup.css';
import { useContext } from 'react';
import { VerificationContext } from "../Context/verificationContextProvider";
import ReCAPTCHA from "react-google-recaptcha";
export const PhoneVerificationPopup = () =>{

    const [btnVerify,setBtnVerify] = useState(false)
    const {
        candlePopup,
        handleCred,
        handleCredData,
        handleCheckOtp,
        setOtp,
      } = useContext(VerificationContext);

    const [number, setNumber] = useState("")
    const [tick, setTick] = useState(true);

    function togglePopup(){
        candlePopup(false)
    }
    function onChange(value) {
        console.log("Captcha value:", value);
        setBtnVerify(true)
      }
      function handleNumberChange(value) {
        setNumber(value);
      }
    
    //   number.length !== 0 ? setShowCaptcha(true) : setShowCaptcha(false)
    const handleMobileOtp = (number) => {
        if (number.length === 10){
            axios.post("https://kooappclone.herokuapp.com/phoneotp",{
                mobileNum: number
            }).then((resp) =>{
                setOtp(resp.data.otp);
                handleCredData(number)
                handleCred("Phone Number")
                handleCheckOtp(true)
            }) 
        }
    }
    // 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
    // 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
    return (
        <div className="popupDiv">
            <div className='headDiv'>
                <p>Enter your phone number</p>
                <button><img src = "/assets/images/close.svg"/></button>
            </div>
            <div className='inputDiv'>
                <div className='firstDiv'>
                    <div>IN</div>
                    <p>+91</p>
                    <img src = "/assets/images/svgexport-1popup.svg" />
                </div>
                <input
                   type="number" 
                   onChange={(e) => handleNumberChange(e.target.value)} 
                   className='secondDiv' />
            </div>
            <div className='hrDiv'>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <p onClick = {() => togglePopup()} className='changeAnchor'>Sign In With Email</p>
            <div>
            <ReCAPTCHA
                style={number ? null : { display: "none" }}
                className='recaptcha'
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
            />
            </div>
            <button
               style={number ? {marginTop: "2.5rem"} : { marginTop: "7.5rem" }}
               disabled = {!btnVerify}
               onClick={() => handleMobileOtp(number)}
               className='sendBtn'>Send OTP</button>
            <div className = "whatsappDiv">
                <input
                    onClick={() => setTick(!tick)} 
                    type="checkbox" value = {tick ? "true" : "false"} className= "whatsAppCheck" />
                <p>I agree to receive important updates via Whatsapp</p>
            </div>
        </div>
      )
}