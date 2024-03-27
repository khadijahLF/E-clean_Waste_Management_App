// Column.js
import React from 'react';

const Column = ({ imageSrc, text }) => {
  return (
    <div className="column">
      <img src={imageSrc} alt="Column Image" />
      <p className='s-text'>{text}</p>
    </div>
  );
};

export default Column;
