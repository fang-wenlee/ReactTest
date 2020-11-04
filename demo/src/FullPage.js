import React from "react";
import { Pager } from "react-bootstrap";

import ReactPageScroller from "../../src";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";


import "./index.css";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

 

  render() {
  
    return (
      <>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >
          <FirstComponent />
          <SecondComponent />  
        </ReactPageScroller>
       
      </>
    );
  }
}
