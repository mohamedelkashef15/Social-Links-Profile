import "./social-links.scss";

interface IProps {
  name: string;
  link: string;
}

const links: IProps[] = [
  { name: "Github", link: "https://github.com/mohamedelkashef15" },
  { name: "Frontend Mentor", link: "https://frontendmentor.io/profile/mohamedelkashef15" },
  { name: "LinkedIn", link: "https://linkedin.com/in/mohamedelkashef/" },
  { name: "Twitter", link: "#" },
  { name: "Intagram", link: "https://instagram.com/mohamedelkashef15/" },
];

function SocialLinks() {
  return (
    <div className="links">
      {links.map((ele) => {
        return <a href={ele.link}>{ele.name}</a>;
      })}
    </div>
  );
}

export default SocialLinks;
