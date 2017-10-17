import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import { Navbar, NavItem, Background, Layout } from './common';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Background url='https://i.pinimg.com/originals/53/c2/c0/53c2c093128a27e6b3348241e12a13ac.png' />
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
                           <img src={logo} width={50} alt='tp' />
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
