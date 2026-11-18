import "./SocialFollow.css";

import FacebookIcon from "../../assets/icons/facebook.svg";
import XIcon from "../../assets/icons/x.svg";
import YouTubeIcon from "../../assets/icons/youtube.svg";

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/Microsoft",
  },
  {
    id: 2,
    name: "X",
    icon: XIcon,
    href: "https://x.com/Microsoft",
  },
  {
    id: 3,
    name: "YouTube",
    icon: YouTubeIcon,
    href: "https://www.youtube.com/@Microsoft",
  },
];

function SocialFollow() {
  return (
    <section className="social-follow-section">
      <h2 className="social-follow-title">
        关注 Microsoft
      </h2>

      <div className="social-follow-links">
        {socialLinks.map((social) => (
          <a
            className="social-follow-link"
            href={social.href}
            key={social.id}
            target="_blank"
            rel="noreferrer"
            aria-label={`打开 Microsoft 的 ${social.name} 主页`}
          >
            <img
              src={social.icon}
              alt=""
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialFollow;