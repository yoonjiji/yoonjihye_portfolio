import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactLinks2: React.FC = () => {
  const contactList = [
    {
      href: "https://github.com/yoonjiji",
      type: "github",
    },
    {
      href: "http://linkedin.com",
      type: "linkedin",
    },
  ];
  return (
    <ul className="contact__links">
      {contactList &&
        contactList.map((item) => (
          <li>
            <a className="contact__link" href={item.href}>
              {item.type === "github" && <FontAwesomeIcon icon={faGithub} />}
              {item.type === "linkedin" && (
                <FontAwesomeIcon icon={faLinkedin} />
              )}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default ContactLinks2;
