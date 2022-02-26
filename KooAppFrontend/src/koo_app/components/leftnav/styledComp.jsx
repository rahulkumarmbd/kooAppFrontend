import "./leftnav.css";
import { useState } from "react";


export const IconChip = (props) => {
  const [color, setColor] = useState(false);
  return (
    <div className="icon-chip">
      <div className="icon-img">
        <img src={props.icon} alt={props.tag} />
        <h3
          style={{ color: color ? "#5D7681" : "#898988" }}
          onClick={() => setColor(!color)}
          className="tag-name"
        >
          {props.tag}
        </h3>
      </div>
    </div>
  );
};

export function commentButton() {
  return (
    <div className='write-comment'>
      <img src='https://www.kooapp.com/img/profilePlaceholderYellow.svg' />
      <p className='comment-text'>Write Your Comment</p>
    </div>
  );
}
