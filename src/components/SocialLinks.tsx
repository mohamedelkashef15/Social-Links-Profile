import "./social-links.scss";

const links = ["Github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

function SocialLinks() {
  return (
    <div className="links">
      {links.map((ele, index) => {
        return (
          <a href="" key={index}>
            {ele}
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
