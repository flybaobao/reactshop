import React from "react";
// import Css from "../../assets/css/common/common.css";
import Css from "../../assets/css/home/homePage.css";
export default class IndexComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div class="app">
        <p>我是app</p>
        <div class={Css["home"]}>我是内部文字</div>
      </div>
    );
    // return <div class={Css["app"]}>我是app</div>;
  }
}
