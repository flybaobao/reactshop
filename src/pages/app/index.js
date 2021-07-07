import React from "react";
import "../../assets/css/common/common.css";
export default class IndexComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div class="app">我是app</div>;
    // <div class={Css["app"]}>我是app</div>;
  }
}
