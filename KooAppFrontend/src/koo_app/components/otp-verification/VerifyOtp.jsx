import { useState } from "react";
import "./phoneVerificationPopup.css";
import { useContext } from "react";
import { VerificationContext } from "../Context/verificationContextProvider";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Is_Auth, Store_User } from "../../../redux/Actions";
import { Navigate } from "react-router-dom";

export function VerifyOtp({ cred, credData, otp }) {
  const { User, IsAuth } = useSelector((store) => store);
  const [isFound, setIsFound] = useState(false);

  const dispatch = useDispatch();
  const { handleCheckOtp } = useContext(VerificationContext);

  const [inputOtp, setInputOtp] = useState("");
  const handleChecking = () => {
    if (otp == inputOtp) {
      axios.get(`https://kooappclone.herokuapp.com/users`).then(({ data }) => {
        for (let i = 0; i < data.length; i++) {
          if (credData == data[i][cred]) {
            dispatch(Store_User(data[i]._id));
            dispatch(Is_Auth(true));
            setIsFound(true);
            return;
          }
        }
        const newUser = {
          [cred]: credData,
        };
        axios
          .post(`https://kooappclone.herokuapp.com/users`, newUser)
          .then(({ data }) => {
            dispatch(Store_User(data._id));
            dispatch(Is_Auth(true));
            setIsFound(true);
            return;
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

  if (isFound) {
    return <Navigate to="/feed" />;
  }

  return (
    <div className="popupDiv">
      <div className="headDiv header">
        <button onClick={() => handleCheckOtp(false)}>
          <img src="/assets/images/back.svg" />
        </button>
        <p>Otp Sent to {credData}</p>
        <button>
          <img src="/assets/images/close.svg" />
        </button>
      </div>
      <p className="changeAnchor edit">Edit {cred}</p>
      <input
        onChange={(e) => setInputOtp(e.target.value)}
        className="emailInput changeSize"
        type="number"
      />
      <p className="changeAnchor resend">Re-send Otp</p>
      <p className="otpArrives">OTP usually arrives within 1 minute</p>
      <button onClick={() => handleChecking()} className="sendBtn proceed">
        Proceed
      </button>
    </div>
  );
}
