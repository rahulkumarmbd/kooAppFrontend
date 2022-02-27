import "./Edit-profile.css";
import { InputBox } from "./inputBox";
import { InputBox2 } from "./inputBox2";
import { useRef, useState, useEffect } from "react";
import { Input } from "./input";
import { useSelector } from "react-redux";
import { useNavigate,Navigate } from "react-router-dom";
import axios from "axios";

export function EditProfile() {
  const showComponent = useRef();
  const showComponent2 = useRef();
  const showInput = useRef([]);
  const [user, setUser] = useState({});
  const { IsAuth, User } = useSelector((store) => store);
  const navigate = useNavigate();

  const handleInput = (i) => {
    showInput.current[i].style.display = "block";
  };

  const handleShow = () => {
    showComponent.current.style.display = "block";
  };

  const handleShow2 = () => {
    showComponent2.current.style.display = "block";
  };

  useEffect(() => {
    axios
      .get(`https://kooappclone.herokuapp.com/users/${User}`)
      .then(({ data }) => {
        setUser(data);
      });
  }, []);

  const userData = [
    {
      text1: "Name",
      text2: user.name == "null" ? "guest_UUFMK" : user.name,
      img: "/assets/editProfileImages/svgexport-1.svg",
      name: "name",
    },
    {
      text1: "Handle",
      text2: user.handle == "null" ? "guest_UUFMK" : user.handle,
      img: "/assets/editProfileImages/svgexport-2.svg",
      name: "handle",
    },
    {
      text1: "Profession",
      text2: user.profession == "null" ? "Profession" : user.profession,
      img: "/assets/editProfileImages/svgexport-3.svg",
      name: "profession",
    },
    {
      text1: "Bio",
      text2: user.bio == "null" ? "Koo Your opinion!" : user.bio,
      img: "/assets/editProfileImages/svgexport-4.svg",
      name: "bio",
    },
    {
      text1: "Website",
      text2: user.website == "null" ? "your website" : user.website,
      img: "/assets/editProfileImages/svgexport-5.svg",
      name: "website",
    },
    {
      text1: "Mobile",
      text2: user.mobileNum == "null" ? "Enter Phone" : user.mobileNum,
      img: "/assets/editProfileImages/svgexport-6.svg",
      name: "mobileNum",
    },
    {
      text1: "email",
      text2: user.email == "null" ? "eg.:username@gmail.com" : user.email,
      img: "/assets/editProfileImages/svgexport-7.svg",
      name: "email",
    },
    {
      text1: "Date of Birth",
      text2: user.dateOfBirth == "null" ? "mm/dd/yyyy" : user.dateOfBirth,
      img: "/assets/editProfileImages/svgexport-8.svg",
      name: "dateOfBirth",
    },
    {
      text1: "Gender",
      text2: user.gender == "null" ? "Select Your Gender" : user.gender,
      img: "/assets/editProfileImages/userIcon.svg",
      name: "gender",
    },
    {
      text1: "Marital Status",
      text2:
        user.maritalStatus == "null"
          ? "Select Your Marital Status"
          : user.maritalStatus,
      img: "/assets/editProfileImages/userIcon-1.svg",
      name: "maritalStatus",
    },
  ];

  const otherData = [
    {
      text1: "Qualification",
      text2: "No qualification added",
      img: "/assets/editProfileImages/userIcon-2.svg",
    },
    {
      text1: "Work Experience",
      text2: "No experience added",
      img: "/assets/editProfileImages/svgexport-3.svg",
    },
  ];

  if(!IsAuth){
    return <Navigate to="/"/>
  }

  return (
    <div>
      <div className="container">
        <div className="topDiv">
          <button onClick={() => navigate(-1)}>
            <img src="/assets/images/back.svg" />
          </button>
          <p>Edit Profile</p>
        </div>
        <div className="editprofileDiv">
          <div className="headerDiv">
            <div className="profilePicDiv">
              <img src={user.profilePic} />
            </div>
            <div className="nameDiv">
              <p>guest_UUFMK</p>
              <div className="selectDiv">
                <img src="/assets/editProfileImages/browse.svg" />
                <img src="/assets/editProfileImages/camera.svg" />
              </div>
            </div>
          </div>
          {userData.map((item, i) => {
            return (
              <EditSection
                text1={item.text1}
                text2={item.text2}
                img={item.img}
                handleInput={handleInput}
                i={i}
              />
            );
          })}
        </div>
        {otherData.map((item) => {
          return (
            <ProfessionalSection
              text1={item.text1}
              text2={item.text2}
              handleShow={handleShow}
              handleShow2={handleShow2}
              img={item.img}
            />
          );
        })}
      </div>
      <InputBox showComponent={showComponent} />
      <InputBox2 showComponent2={showComponent2} />
      {userData.map((item, i) => {
        return (
          <Input
            showInput={showInput}
            text1={item.text1}
            text2={item.text2}
            i={i}
            name={item.name}
            setUser={setUser}
          />
        );
      })}
    </div>
  );
}

function EditSection({ text1, text2, img, handleInput, i }) {
  return (
    <div className="userDataDiv">
      <img src={img} />
      <div className="dataTextDiv">
        <p className="query">{text1}</p>
        <p className="answer" onClick={() => handleInput(i)}>
          {text2}
        </p>
      </div>
    </div>
  );
}

function ProfessionalSection({ text1, text2, img, handleShow, handleShow2 }) {
  return (
    <div className="professionDataDiv">
      <div className="firstDiv">
        <img src={img} />
        <p>{text1}</p>
      </div>
      <div className="secondDiv">
        <p>{text2}</p>
        <button onClick={text1 == "Qualification" ? handleShow : handleShow2}>
          +Add New
        </button>
      </div>
    </div>
  );
}
