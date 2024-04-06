import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="post-image"
        src="https://i.pinimg.com/474x/aa/ad/50/aaad506d5979f87e29fc685e71dde701.jpg"
        alt=""
      ></img>
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Fiction</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil
        ratione laboriosam perspiciatis repudiandae cupiditate, harum deserunt
        optio quam maiores, molestiae ullam dolorum! Laboriosam dolorum error
        debitis veniam dolore explicabo. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Obcaecati odit adipisci placeat ea quae corrupti
        accusantium? Dolore tempora id dolorum consequatur facere facilis
        provident officiis esse culpa, odit optio ullam.
      </p>
    </div>
  );
}
