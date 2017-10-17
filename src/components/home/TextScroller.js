import React from 'react';
import './TextScroller.css';

class TextScroller extends React.Component {
   state = {
      currentItem: 0,
      intervalId: ''
   }

   componentDidMount() {
      const intervalId = setInterval(() => {
         const { currentItem } = this.state;
         const itemCount = this.props.items.length;
         this.setState({ currentItem: (currentItem + 1) % itemCount })
      }, 2000);

      this.setState({ intervalId });
   }

   componentWillUnmount() {
      clearInterval(this.state.intervalId);
   }

   render() {
      const { height } = this.props;
      return (
         <div className='TextScroller' style={{ height }}>
            <div style={{
               marginTop: -1 * height * this.state.currentItem
            }}>
               {
                  this.props.items.map((item, i) => (
                     <span
                        key={i}
                        className='TextScrollerItem'>{item}</span>
                  ))
               }
            </div>
         </div>
      );
   }
}

export default TextScroller;