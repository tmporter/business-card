import React from 'react';

const Background = (props) => {
   return (
      <div style={{
         zIndex: -9999,
         position: 'fixed',
         display: 'block',
         width: '100vw',
         height: '100vh',
         top: 0,
         left: 0,
         backgroundSize: 'cover',
         background: `url(${props.url}) no-repeat center center fixed`,
      }} />
   );
}

export default Background;