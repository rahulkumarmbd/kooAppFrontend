import "./inputBox.css";
export const Input = ({ showInput, text1, text2, i }) => {
  const handleNotShow = () => {
    showInput.current[i].style.display = "none";
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
            <input type="text" placeholder="Certification" value={text2} />
          </div>
        </div>
        <div>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};