//Dependencies
import React from 'react';

//Styling
import './Equipment.css';

//Assets
import { EQUIPMENT } from '../../../assets/info';

const Equipment = () => {
  return (
    <div className="equipment">
      <h3>Interested in our exciting iFit-enabled equipment?</h3>
      <ul>
        {EQUIPMENT.map((equipmentItem,i) => {
          return (
            <li className="equipment-item"  key={i}>
              <a href={equipmentItem.url}>
                <div className="equipment-image-container">
                  <img src={equipmentItem.image} alt={equipmentItem.title} />
                </div>
                <span className="equipment-title">{equipmentItem.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Equipment;