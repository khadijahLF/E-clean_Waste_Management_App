
import React from 'react';

const Columnn = ({ imageSrc, text }) => {
  return (
    <div className="column">
      <img src={imageSrc} alt="Column Image" />
      <p className='s-text'>{text}</p>
    </div>
  );
};

export default Columnn;
