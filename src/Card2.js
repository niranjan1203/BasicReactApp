import React from 'react';

const Card2 = ({ name, age,Fathersname,Mothersname,movies,college,awards,profession }) => {

  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + 'actor.jpg'} alt="Profile" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <div>
        <p>Father's Name: {Fathersname}</p>
        <p>Mother's Name: {Mothersname}</p>
        <p>Movies: {movies}</p>
        <p>Profession: {profession}</p>
        <p>College: {college}</p> 
        <p>Awards: {awards}</p>
      </div>
    </div>
  );
};

export default Card2;