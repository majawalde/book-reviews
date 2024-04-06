import "./sidebar.css";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">About Us</span>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/584/351/desktop-wallpaper-cute-cartoon-characters-funny-aesthetic-profile-friendship-best-friend-aesthetic-best-friend-summer.jpg"
          alt=""
          className="sidebar-image"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut deleniti
          asperiores repellendus.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Fiction</li>
          <li className="sidebar-list-item">Classics</li>

          <li className="sidebar-list-item">Non-Fiction</li>
          <li className="sidebar-list-item">Romance</li>
          <li className="sidebar-list-item">Fantasy</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Follow Us 🫶🏼</span>
        <div className="sidebar-socials">
          <FaInstagram className="sidebar-icon" />
          <FaPinterest className="sidebar-icon" />
          <FaTiktok className="sidebar-icon" />
        </div>
      </div>
    </div>
  );
}
