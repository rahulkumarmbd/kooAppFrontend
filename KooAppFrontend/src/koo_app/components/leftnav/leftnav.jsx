import "./leftnav.css";
import * as React from "react";
import { IconChip } from "./styledComp.jsx";
import { Link } from "react-router-dom";

export const LeftNav = () => {
  return (
    <div className="leftnav">
        <div className="logo">
          <img src="/assets/images/koo-logo.svg" alt="" />
        </div>
      <Link to="/feed">
        <IconChip icon={"/assets/images/homeactive.svg"} tag="Home" />
      </Link>
      <Link to="/profile/id">
        <IconChip icon={"/assets/images/koo-avatar.svg"} tag="Profile" />
      </Link>

      <IconChip icon={"/assets/images/hashtaginActive.svg"} tag="Explore" />
      <IconChip icon={"/assets/images/icLanguageInActive.svg"} tag="Language" />
      <IconChip icon={"/assets/images/searchInActive.svg"} tag="Search" />
      <IconChip
        icon={"/assets/images/notificationInActive.svg"}
        tag="Notification"
      />
      <Link to="/">
        <IconChip icon={"/assets/images/logout.svg"} tag="Logout" />
      </Link>

      <Link to="/create">
        <div className="koo-button">
          <h3>+Koo</h3>
        </div>
      </Link>
    </div>
  );
};
