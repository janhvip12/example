import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/NavBar.css';

const NavBar = ({size,setShow}) => {
  return (
    <>
    <nav>
        <div className='nav-box'>
            <span className='shopname'>KITAB CORNER </span>

            <div className='cart-box' onClick={()=>setShow(false)}>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span> {size} </span>
            </div>
        </div>
    </nav>    
    </>

  )
}

export default NavBar;
