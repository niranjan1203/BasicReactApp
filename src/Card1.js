import React from 'react';

const Card1 = ({ name, age,location }) => {
  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + 'img.jpg'} alt="Profile" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default Card1;