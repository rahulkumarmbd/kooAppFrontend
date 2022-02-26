import "./Edit-profile.css";
import { InputBox } from "./inputBox";
import { InputBox2 } from "./inputBox2";
import { useRef } from "react";
import { Input } from "./input";

export function EditProfile() {
  const showComponent = useRef();
  const showComponent2 = useRef();
  const showInput = useRef([]);

  const handleInput = (i) => {
    showInput.current[i].style.display = "block";
  };

  const handleShow = () => {
    showComponent.current.style.display = "block";
  };

  const handleShow2 = () => {
    showComponent2.current.style.display = "block";
  };

  const userData = [
    {
      text1: "Name",
      text2: "guest_UUFMK",
      img: "/assets/editProfileImages/svgexport-1.svg",
    },
    {
      text1: "Handle",
      text2: "guest_UUFMK",
      img: "/assets/editProfileImages/svgexport-2.svg",
    },
    {
      text1: "Profession",
      text2: "Profession",
      img: "/assets/editProfileImages/svgexport-3.svg",
    },
    {
      text1: "Bio",
      text2: "Koo Your Opinion!",
      img: "/assets/editProfileImages/svgexport-4.svg",
    },
    {
      text1: "Website",
      text2: "https://www.kooapp.com/profile/guest_UUFMK",
      img: "/assets/editProfileImages/svgexport-5.svg",
    },
    {
      text1: "Mobile",
      text2: "Enter Phone",
      img: "/assets/editProfileImages/svgexport-6.svg",
    },
    {
      text1: "1",
      text2: "eg.:username@gmail.com",
      img: "/assets/editProfileImages/svgexport-7.svg",
    },
    {
      text1: "Date of Birth",
      text2: "mm/dd/yyyy",
      img: "/assets/editProfileImages/svgexport-8.svg",
    },
    {
      text1: "Gender",
      text2: "Select Your Gender",
      img: "/assets/editProfileImages/userIcon.svg",
    },
    {
      text1: "Marital Status",
      text2: "Select Your Marital Status",
      img: "/assets/editProfileImages/userIcon-1.svg",
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
  return (
    <div>
      <div className="container">
        <div className="topDiv">
          <button>
            <img src="/assets/images/back.svg" />
          </button>
          <p>Edit Profile</p>
        </div>
        <div className="editprofileDiv">
          <div className="headerDiv">
            <div className="profilePicDiv">
              <img src="/assets/editProfileImages/img.svg" />
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
