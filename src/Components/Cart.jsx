import React, { useState } from 'react'

const Cart = ({cart,setCart}) => {

    const[price,setPrice] = useState(0);
  return (
    <div>
       {
        cart?.map((item) => (
            <div className='cart-dabba' key={item.id}> 
                <div className='cart-img'> 
                    <img src = {item.image} /> 
                    <p>{item.title}</p>
                </div>

                <div> 
                    <button>+</button> 
                    <button>-</button> 
                </div>
                
                <div>
                <span>{item.price}</span>
                <button>REMOVE</button>
                </div>
            </div>
        ))
        }

    </div>
  )
}

export default Cart
