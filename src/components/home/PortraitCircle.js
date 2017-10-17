import React from 'react';

const PortraitCircle = (props) => {
   return (
      <img
         style={{
            borderRadius: '50%',
            minWidth: 250,
            minHeight: 250,
            maxWidth: 350,
            maxHeight: 350,
            width: props.size,
            height: props.size,
            ...props.style
         }}
         src={props.src}
         alt={props.alt} />
   );
}

export default PortraitCircle;