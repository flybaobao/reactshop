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
        <div class={Css["page-home"]}>
          <div class={Css["home-header"]}>头部header</div>
          <div class={Css["home-content"]}>内容</div>
          <div class={Css["home-footer"]}>底部</div>
        </div>
      </div>
    );
    // return <div class={Css["app"]}>我是app</div>;
  }
}
