import React from 'react';
import { Twitter, Github, StackOverflow } from '../../assets/icons';

import IconLink from './IconLink';

const iconWidth = 100;

const Contact = (props) => {
   return (
      <div id='contact' style={{ textAlign: 'center' }}>
         <h1>Contact</h1>
         <IconLink
            src={Twitter}
            href='https://twitter.com/timothy_porter_'
            width={iconWidth}
         />
         <IconLink
            src={Github}
            href='https://github.com/tmporter'
            width={iconWidth}
         />
         {/* <IconLink
            src={StackOverflow}
            href='https://www.stackoverflow.com'
            width={iconWidth}
         /> */}
      </div>
   );
}

export default Contact;