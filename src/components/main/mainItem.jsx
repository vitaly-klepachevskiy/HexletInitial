import React from 'react';
import './mainItem.css';

const MainItem = (props) => {
  const { header, description } = props;

  return (
    <div className="main-item-container">
      {props.logo}
      <h2 className="main-item-header">{header}</h2>
      <p className="main-item-description">{description}</p>
    </div>
  );
};

export default MainItem;
