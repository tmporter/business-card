import React from 'react';

const GridItem = (props) => {
   return (
      <div style={{
         gridArea: props.area
      }}>{props.children}</div>
   );
}

export default GridItem;