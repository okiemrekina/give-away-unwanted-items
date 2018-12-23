import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Radium, {StyleRoot} from "radium";
import '../scss/index.scss';

// class MyFirstComponent extends React.Component{
//     render() {
//        return <div>
//             <h1>Hello World!</h1>
//             <p>This is my first React Component.</p>
//         </div>
//        }
//  }

 class TopMenu extends React.Component{
    render() {
       return <div className="top-menu">

               <div className="header-image"></div>

               <section className="header">
               <div className="user-log-register">
                  <ul>
                     <li><a href="/">Zaloguj</a></li>
                     <li><a href="/">Załóź konto</a></li>
                  </ul>
               </div>

               <div className="navigation-menu">
                  <ul>
                     <li><a href="/">Start</a></li>
                     <li><a href="/">O co chodzi?</a></li>
                     <li><a href="/">O nas</a></li>
                     <li><a href="/">Fundacje i organizacje</a></li>
                     <li><a href="/">Kontakt</a></li>
                  </ul>
               </div>
               </section>

               <BottomMenu/>

            </div>
       }
 }

 class BottomMenu extends React.Component{
    render() {
       return <section className="bottom-menu">
                <div className="title">Zacznij pomagać!
                  <br/>Oddaj niechciane rzeczy w zaufane ręce!
                </div>
                <div className="decoration"></div>
                <div className="buttons">
                  <div className="button-give">oddaj rzeczy</div>
                  <div className="button-organize">zorganizuj zbiórkę</div>
                </div>
            </section>
       }
 }

// export default MyFirstComponent;

export {
   TopMenu,
   BottomMenu
}