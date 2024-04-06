import "./singlepost.css";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepost-wrapper">
        <img
          src="https://i.pinimg.com/474x/2b/19/2c/2b192cebfc944ea8c40d541650d55274.jpg"
          alt=""
          className="singlepost-image"
        />
        <h1 className="singlepost-title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <div className="singlepost-edit">
            <FaEdit className="singlepost-icon" />
            <FaTrashAlt className="singlepost-icon" />
          </div>
        </h1>
        <div className="singlepost-info">
          <span className="singlepost-author">
            Author: <b>Maja</b>
          </span>
          <span className="singlepost-date">1 hour ago</span>
        </div>
        <p className="singlepost-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          commodi, nobis voluptas laudantium omnis asperiores autem quae beatae
          at! Quisquam amet deleniti maiores soluta voluptate enim quaerat non
          dicta cumque.
        </p>
      </div>
    </div>
  );
}
