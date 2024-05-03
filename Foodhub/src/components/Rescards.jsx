import React from 'react';
import CDN_URL from '../utils/Constant';

function Rescards(props) {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info || {};

  return (
    <div className='res-card'>
      {cloudinaryImageId && (
        <img
          className='res-logo'
          src={CDN_URL + cloudinaryImageId}
          alt={name} // Use restaurant name as alt text for better accessibility
        />
      )}
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h3> {costForTwo} </h3>
      <h3>{sla?.deliveryTime} minutes</h3>
    </div>
  );
}

export default Rescards;
