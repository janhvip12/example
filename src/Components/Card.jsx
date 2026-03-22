import React from 'react';
import '../Styles/Card.css'

const Card = ({item, handleClick}) => {

    const {title,author,price,image} = item;
  return (
    <div className='cards'>

        <div className='image-box'>
        <img src={image} alt='title' />
        </div>

        <div className='details'>
            <p>{title}</p>
            <p>{author}</p>
            <p>Rs.{price}</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>

    </div>
  )
}

export default Card;
