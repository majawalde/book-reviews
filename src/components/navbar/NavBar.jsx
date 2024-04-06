import "./navbar.css";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="top">
      <div className="top-left">
        <FaInstagram className="top-icon" />
        <FaTiktok className="top-icon" />
        <FaPinterest className="top-icon" />
      </div>

      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">Home</li>
          <li className="top-list-item">About</li>
          <li className="top-list-item">Home</li>
          <li className="top-list-item">Write</li>
          <li className="top-list-item">Logout</li>
        </ul>
      </div>
      <div className="top-right">
        <img
          className="top-image"
          src="https://i.pinimg.com/736x/dd/8b/a9/dd8ba98ba0b06489ac96f76b74fe7fc6.jpg"
          alt="profile image"
        ></img>
        <FaSearch className="top-search-icon" />
      </div>
    </div>
  );
}
