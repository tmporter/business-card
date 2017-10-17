import React from 'react';

import PortraitCircle from './PortraitCircle';
import TextScroller from './TextScroller';

import './Home.css';

const Home = (props) => {
   return (
      <div className='Home'>
         <h1>Timothy Porter</h1>
         <PortraitCircle
            src='http://saimg-a.akamaihd.net/saatchi/298926/art/2358222/1428380-7.jpg'
            size='20vw'
         />
         <h2>
            <span>web&nbsp;</span>
            <TextScroller
               height={29}
               items={['designer', 'developer', 'boi']}
            />
         </h2>
      </div>
   );
}

export default Home;