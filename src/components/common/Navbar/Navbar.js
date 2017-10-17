import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
   return (
      <div className='Navbar' style={{
         justifyContent: props.justifyContent || 'flex-start'
      }}>{props.children}</div>
   );
}

export default Navbar;