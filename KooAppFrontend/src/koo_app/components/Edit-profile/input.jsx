import "./inputBox.css";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
export const Input = ({ showInput, text1, text2, i, name, setUser }) => {
  const [value, setValue] = useState({});
  const { IsAuth, User } = useSelector((store) => store);
  const handleNotShow = () => {
    showInput.current[i].style.display = "none";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ [name]: value });
    console.log(value, "name", name);
  };

  const update = () => {
    axios
      .patch(`https://kooappclone.herokuapp.com/users/${User}`, value)
      .then(({ data }) => {
        setUser(data);
        handleNotShow();
      });
  };

  return (
    <div className="InputBox" ref={(el) => (showInput.current[i] = el)}>
      <div className="SectionComponent">
        <div>Add New</div>
        <div className="crossSign">
          <div onClick={handleNotShow}>
            <img src="https://www.kooapp.com/img/close.svg" alt="" />
          </div>
        </div>
        <div className="section">
          <div>{text1}</div>
          <div>
            <input
              type="text"
              placeholder={text2}
              onChange={handleChange}
              name={name}
            />
          </div>
        </div>
        <div>
          <button onClick={update}>Save</button>
        </div>
      </div>
    </div>
  );
};
