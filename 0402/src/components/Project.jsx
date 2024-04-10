import React from 'react';

export default function Project({image, meta, title, desc}) {
    return (
      <>
        <img className="project__img" src={image} alt={meta} />
        <div className="project__metadata">
            <h3 className="project__metadata__title">{title}</h3>
            <p>{desc}</p>
        </div>
      </>
    );
}