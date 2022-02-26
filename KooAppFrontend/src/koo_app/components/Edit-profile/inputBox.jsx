import { useEffect } from "react";
import "./inputBox.css";
export const InputBox = ({ showComponent }) => {
  const handleNotShow = () => {
    showComponent.current.style.display = "none";
  };
  useEffect(() => {
    console.log("showComponent", showComponent.current);
  }, []);
  return (
    <div className="InputBox" ref={showComponent}>
      <div className="SectionComponent">
        <div>Add New</div>
        <div className="crossSign">
          <div onClick={handleNotShow}>
            <img src="https://www.kooapp.com/img/close.svg" alt="" />
          </div>
        </div>
        <div className="section">
          <div>Certification</div>
          <div>
            <input type="text" placeholder="Certification" />
          </div>
        </div>
        <div className="section">
          <div>Institute Name</div>
          <div>
            <input type="text" placeholder="College/School" />
          </div>
        </div>
        <div className="section">
          <div>Graduation Year</div>
          <div>
            <input type="Number" placeholder="Select Date" />
          </div>
        </div>
        <div>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};