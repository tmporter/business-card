import React from 'react';
import { css } from 'glamor';

let contentRules = css({
   marginTop: '50px',
   padding: '0 10px'
});

const Layout = (props) => {
   return (
      <div>
         <div>
            {props.header}
         </div>
         <div {...contentRules}>
            {props.content}
         </div>
         <div>
            {props.footer}
         </div>
      </div>
   );
}

export default Layout;