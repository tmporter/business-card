import React from 'react';

const Grid = (props) => {
   return (
      <div
         style={{
            display: 'grid',
            gridTemplate: props.template,
            gridTemplateColumns: props.templateColumns,
            gridTemplateRows: props.templateRows,
            gridTemplateAreas: props.templateAreas
         }}
      >{props.children}</div>
   );
}

export default Grid;