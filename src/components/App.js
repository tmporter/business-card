import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import { css } from 'glamor';

import { Navbar, NavItem, Background, Layout } from './common';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';

let style = css({
   textAlign: 'center'
});

class App extends Component {
   render() {
      return (
         <div className="App" {...style}>
            <Layout
               header={
                  <Navbar justifyContent='space-around'>
                     <NavItem>
                        <NavLink to='/about' activeClassName='Selected'>
                           <span>about</span>
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink exact to='/' activeClassName='Selected'>
                           <span className='brand'>TP</span>
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to='/contact' activeClassName='Selected'>
                           <span>contact</span>
                        </NavLink>
                     </NavItem>
                  </Navbar>
               }
               content={
                  <Switch>
                     <Route exact path='/' component={Home} />
                     <Route path='/about' component={About} />
                     <Route path='/contact' component={Contact} />
                  </Switch>
               }
            />
         </div>
      );
   }
}

export default App;
