import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
   return (
      <span className='NavItem'>{props.children}</span>
   );
}

export default NavItem;