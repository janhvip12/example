import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import Shop from './Components/Shop';
import './App.css'
import Cart from './Components/Cart'

const App = () => {

  const[cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show,setShow] = useState(true);

  const handleClick = (item) =>{
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id)
        isPresent=true;
    })
      if(isPresent){
        setWarning(true);
        setTimeout(()=>{
          setWarning(false)
        },2000);
        return
      }
    
      setCart([...cart,item])
  }
  
  return (
    <div>
      <NavBar size={cart.length} setShow ={setShow}/>

      {
        show ? <Shop handleClick = {handleClick}/> : <Cart cart={cart} setCart={setCart} />
      }

      
      {warning && <div className='warn'> Book is present in the cart </div>}
    </div>
  )
}

export default App;
