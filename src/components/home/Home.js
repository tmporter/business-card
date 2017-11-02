import React from 'react';

import PortraitCircle from './PortraitCircle';
import TextScroller from './TextScroller';

const Home = (props) => {
   return (
      <div className='Home' >
         <h1 className='brand'>Timothy Porter</h1>
         <PortraitCircle
            src='https://pbs.twimg.com/profile_images/911278245693333506/sN0ajzgR_400x400.jpg'
            size='20vw'
            style={{
               filter: 'grayscale(100%)',
               border: '2px solid white'
            }}
         />
         <h2>
            <TextScroller
               height={29}
               items={[
                  'developer',
                  'la croix fanboy',
                  'planeswalker',
                  'hylian'
               ]}
            />
         </h2>
      </div>
   );
}

export default Home;