import React from 'react';
import { Twitter, Github, StackOverflow } from '../../assets/icons';

import IconLink from './IconLink';

const iconWidth = 100;

const Contact = (props) => {
   return (
      <div id='contact' style={{ textAlign: 'center' }}>
         <h1 className='brand'>Find Me</h1>
         <a href='mailto:tmporter42@gmail.com'>Email</a> |
         <a href='https://twitter.com/timothy_porter_'>Twitter</a> |
         <a href='https://github.com/tmporter'>GitHub</a>
      </div>
   );
}

export default Contact;