import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer_links">
        <li className="linkedin">
          <a href="https://www.linkedin.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="facebook">
          <a href="https://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
      </ul>
      <ul className="footer_right">
        <li>
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          2021-tedros
        </li>
      </ul>
    </div>
  );
};

export default Footer;
