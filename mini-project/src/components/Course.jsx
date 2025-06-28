import "../css/Courses.css";
import React, { useState } from 'react';

function Course({course}) {
  const [count, setCount] = useState(0);
  const { title, description, price, link, image } = course;
   const increaseCount = (count) => setCount(count + 1);

   const remove = () =>setCount(0);
    


  return (
    <>
      <div className="course">
        <img className= "image" src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Enroll Now</a>
        <button onClick={() => increaseCount(count)}>
            Add: {count}
          </button>
          <button onClick={() =>remove()}>
            Remove
          </button>
      </div>
    </>
  )
}

export default Course