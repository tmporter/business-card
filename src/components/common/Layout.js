import React from 'react';

const Layout = (props) => {
   return (
      <div>
         <div>
            {props.header}
         </div>
         <div style={{ marginTop: 50 }}>
            {props.content}
         </div>
         <div>
            {props.footer}
         </div>
      </div>
   );
}

export default Layout;