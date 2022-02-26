import "./rightNav.css";
import * as React from "react";
import { Trendinghashtags } from "../utilityComp.jsx";
export const RightNav = () => {
  return (
    <div className="rightNav">
      <input type="text" placeholder="Search" />
      <Trendinghashtags />
    </div>
  );
};
