import React, { useState } from 'react';
import './Option.css';

const Option = ({ value }) => {
  const [ isSelected, setIsSelected ] = useState(false);
  return (
    <button
      type="button"
      className={isSelected ? 'btn__isSelected' : 'btn'}
      onClick={() => setIsSelected(!isSelected)}
    >
      {value}
    </button>
  );
};

export default Option;
