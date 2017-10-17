import React from 'react';
import style from './IconLink.css';

const IconLink = (props) => {
   return (
      <a href={props.href} target='_blank'>
         <img src={props.src} style={{ ...style.img, width: props.width }} />
      </a>
   );
}

export default IconLink;