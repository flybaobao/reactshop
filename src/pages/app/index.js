import React from "react";
// import Css from "../../assets/css/common/common.css";
import Css from "../../assets/css/home/homePage.css";
import homeImg1 from "../../assets/images/home/homebtn1.png";
import homeImg2 from "../../assets/images/home/homebtn2.png";
import homeImg3 from "../../assets/images/home/homebtn3.png";
import homeImg4 from "../../assets/images/home/homebtn4.png";
import homeImg7 from "../../assets/images/home/homebtn7.png";
import homeImg8 from "../../assets/images/home/homebtn8.png";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "../../components/libs/AsyncComponent";
const IndexHome = asyncComponent(() => import("../home/index"));
const IndexFoods = asyncComponent(() => import("../home/foods/foodsIndex"));
const IndexUser = asyncComponent(() => import("../home/user"));
export default class IndexComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: "1",
    };
  }
  componentDidMount() {
    this.setState({ activeIndex: "1" });
  }
  chooseBtn(index, url) {
    this.setState({ activeIndex: index });
    this.props.history.replace(url);
  }
  render() {
    return (
      <div>
        <React.Fragment>
          <Switch>
            <Route path="/home/index" exact component={IndexHome}></Route>
            <Route path="/home/foods" exact component={IndexFoods}></Route>
            <Route path="/home/users" exact component={IndexUser}></Route>
          </Switch>
        </React.Fragment>
        <div class={Css["bottom-nanv"]}>
          {/* <p>我是app</p>
        <div class={Css["home"]}>我是内部文字</div>
        <div class={Css["page-home"]}>
          <div class={Css["home-header"]}>头部header</div>
          <div class={Css["home-content"]}>内容</div>
          <div class={Css["home-footer"]}>底部</div>
        </div> */}
          <ul class={Css["nav-btn"]}>
            <li
              class={Css["btn-home"]}
              onClick={this.chooseBtn.bind(this, "1", "/home/index")}
            >
              <img
                class={Css["btn-pic"]}
                src={this.state.activeIndex === "1" ? homeImg1 : homeImg2}
                alt=""
              />
              <span
                class={
                  this.state.activeIndex === "1" ? Css["active-pro"] : "static"
                }
              >
                首页
              </span>
            </li>
            <li
              class={Css["btn-home"]}
              onClick={this.chooseBtn.bind(this, "2", "/home/foods")}
            >
              <img
                class={Css["btn-pic"]}
                src={this.state.activeIndex === "2" ? homeImg3 : homeImg4}
                alt=""
              />
              <span
                class={
                  this.state.activeIndex === "2" ? Css["active-pro"] : "static"
                }
              >
                目录
              </span>
            </li>
            <li
              class={Css["btn-home"]}
              onClick={this.chooseBtn.bind(this, "3", "/home/users")}
            >
              <img
                class={Css["btn-pic"]}
                src={this.state.activeIndex === "3" ? homeImg7 : homeImg8}
                alt=""
              />
              <span
                class={
                  this.state.activeIndex === "3" ? Css["active-pro"] : "static"
                }
              >
                我的
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
    // return <div class={Css["app"]}>我是app</div>;
  }
}
