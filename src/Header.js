import React from 'react'
import img from '/home/stephen/ecommerce-product-page-main/src/image-avatar.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Header = () => {
    return (
        <div className = "header">
          <div className='burger'>
           <div className='lineOne'></div>
           <div className='lineTwo'></div>
           <div className='lineThree'></div>    
          </div>  
          
        <div className ="header_optionOne">
        <div className='logo'>Sneakers</div>
        <div className='list'>
        <span>Collection</span>
         <span>Men</span>
         <span>Women</span>
         <span>About</span>
         <span>Contact</span>
        </div>
         
         </div>
         <div className='header_optionTwo'>
         <AddShoppingCartIcon />
         <img className='header_img' src={img} alt="" />
         </div>
        </div>
    )
}

export default Header
