import React from "react";
import ReactDOM from 'react-dom'
import ReactPageScroller from "../../src";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";


import "./index.css";

export default class FullPage extends React.Component {
  
  
  render() {
  
    return (
      <React.Fragment>
        <ReactPageScroller>
            <FirstComponent />          
            <SecondComponent />                   
        </ReactPageScroller>
       
      </React.Fragment>
    );
  }
}


ReactDOM.render(
  <FullPage />,
  document.getElementById("root"),
);
