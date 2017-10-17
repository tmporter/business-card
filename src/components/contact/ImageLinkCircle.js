import React from 'react';

const style = {
   link: {
      background: '#333'
   },
   img: {

   }
}

const ImageLinkCircle = (props) => {
   return (
      <a
         style={{
            display: 'inline-block',
            background: '#333',
            borderRadius: '50%',
            color: 'white',
            width: props.size,
            height: props.size,
            margin: 0,
            padding: 5
         }}
         href={props.href}>
         <img
            style={{
               width: props.size,
               height: props.size,
               color: 'white'
            }}
            src={props.src}
            alt={props.alt}
         />
      </a>
   );
}

export default ImageLinkCircle;