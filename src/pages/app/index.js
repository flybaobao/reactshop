import React from "react";
// import Css from "../../assets/css/common/common.css";
// import "../../assets/css/common/common.css";
export default class IndexComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div class="app">我是app</div>;
    // return <div class={Css["app"]}>我是app</div>;
  }
}
