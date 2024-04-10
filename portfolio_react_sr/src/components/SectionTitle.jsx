import React from 'react';

export default function SectionTitle({title, description}) {
    return (
      <>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </>
    );
}