import React from 'react';
import arrowLeftIcon from '../../../assets/icons/left-arrow-icon.png';

const LeftArrow = () => {
  return (
    <button className="review-arrow left">
      <img src={arrowLeftIcon} alt="left button" className="arrow-direction" />
    </button>
  );
};

export default LeftArrow;