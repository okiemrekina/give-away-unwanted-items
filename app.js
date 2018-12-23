import React, {Component} from 'react';
import Radium, {StyleRoot} from "radium";
// import './index.scss';
import './scss/index.scss';
import WebFont from './js/font.js';
import {TopMenu, BottomMenu} from './js/c1_header';

class App extends Component {
  render(){
    return (
      <StyleRoot>
        <div className="App">
          {/* <MyFirstComponent></MyFirstComponent> */}
          <TopMenu></TopMenu>
          {/* <BottomMenu></BottomMenu> */}
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);
