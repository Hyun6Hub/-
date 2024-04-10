import React from 'react';
import SectionTitle from './SectionTitle';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    const linkList = [
      {
        href: "http://github.com",
        icon: faGithub
      },
      {
        href: "http://linkedin.com",
        icon: faLinkedin
      },

    ];

    return (
      <div id="contact" className="section">
        <SectionTitle
              title="Let's talk"
              description="jeon.developer.judy@gmail.com" />
        <ul className="contact__links">
          {linkList.map(link => (
            <li>
              <FooterContact 
                    href={link.href}
                    icon={link.icon} />
            </li>
          ))}
        </ul>
        <p>Dream Software Engineer Judy - All right reserved</p>
      </div>
    );
}

/**
* FooterContact
*/
export function FooterContact({href, icon}) {
    return (
      <a className="contact__link" href={href}>
        <FontAwesomeIcon icon={icon}  />
      </a>
    );
}
