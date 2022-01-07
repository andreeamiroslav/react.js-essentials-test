import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import {BrowserRouter as Router} from 'react-router-dom'

// function App2(){
//   return(
//     <h1>This is the second app</h1>
//   )
// }

// -------------------- Array destructuring ---------------------
//useful if you have a lot of props in a component

//const [mostImportantItem, , item3] = ['ao', 'ao1', 'ao2'] 

//the variables inside the [] assign keys (variable names) to the array values, 
//if you leave spaces they act as placeholders

ReactDOM.render( //you can only render one component at a time unless they're enclosed in a div for example
  // <> {/*React fragment allows you to render more components at once without creating new elements to wrap them in*/}
  //   <App /*login="ao"*/ /*authorized={false}*/ /> {/*No need to actually write "React.Fragment" in the brackets*/}
  //   {/* <App2 /> */}
  // </>,

  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
