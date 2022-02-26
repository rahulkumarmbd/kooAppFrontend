import { useEffect } from "react";
import "./inputBox.css";
export const InputBox2 = ({ showComponent2 }) => {
  const handleNotShow2 = () => {
    showComponent2.current.style.display = "none";
  };
  useEffect(() => {
    console.log("showComponent2", showComponent2.current);
  }, []);
  return (
    <div className="InputBox" ref={showComponent2}>
      <div className="SectionComponent">
        <div>Add New</div>
        <div className="crossSign">
          <div onClick={handleNotShow2}>
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
          <div>from</div>
          <div>
            <input type="Number" placeholder="Select Date" />
          </div>
        </div>
        <div className="section">
          <div>To</div>
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