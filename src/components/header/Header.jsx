import "./header.css";
import headerImg from ".././images/cover.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title">Literary Duo</span>
      </div>
      <img src={headerImg} alt="" className="header-image" />
    </div>
  );
}
