import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
* Job
*/
export function Job({src, alt, name, period}) {
    return (
      <>
        <img src={src} alt={alt} />
        <div>
          <p class="job__name">{name}</p>
          <p class="job__period">{period}</p>
        </div>
      </>
    );
}

/**
* Major
*/
export function Major({icon, title, desc}) {
    return (
      <div>
        <FontAwesomeIcon icon={icon} className="major__icon" />
        <p className="major__title">{title}</p>
        <p>{desc}</p>
      </div>
    );
}