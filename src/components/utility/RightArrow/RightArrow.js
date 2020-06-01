import React from 'react';
import arrowRightIcon from '../../../assets/icons/right-arrow-icon.png';

const RightArrow = () => {
  return (
    <button className="review-arrow right">
      <img src={arrowRightIcon} alt="left button" className="arrow-direction"/>
    </button>
  );
};

export default RightArrow;