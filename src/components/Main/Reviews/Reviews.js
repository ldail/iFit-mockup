//Dependencies
import React from 'react';
import LeftArrow from '../../utility/LeftArrow/LeftArrow';
import RightArrow from '../../utility/RightArrow/RightArrow';

//Styling
import './Reviews.css';

//Assets
import { REVIEWS } from '../../../assets/info';

const Reviews = () => {

  //Only display number of reviews that can fit in the window.
  const displayTotalCount = window.innerWidth >= 1075 ? 3 : window.innerWidth >= 725 ? 2 : 1
  return (
    <div className="reviews">
      <ul>
        {REVIEWS.map((review,i) => {
          if (i < displayTotalCount) {
            return (
              <li key={i} className="review-item">
                <h4><review.CompanyLogo /></h4>
                <p>{review.reviewInfo}</p>
                {i === 0 && <LeftArrow />}
                {i === displayTotalCount - 1 && <RightArrow />}
              </li>
            );
          }
          else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default Reviews;