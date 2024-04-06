import "./write.css";
import { AiOutlineFileAdd } from "react-icons/ai";

export default function Write() {
  return (
    <div className="write">
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <AiOutlineFileAdd className="write-icon" />
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Write something..."
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
}
