/*
 HashRouter :有#号
 BrowerRouter: 没有#号
 Switch: 只要匹配到一个地址 不往下 匹配， 相当于for循环里边的 break
 Link: 跳转页面，相当于vue的router-link

 exact： 完全匹配路由
*/

import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import { private } from "./routes/private";
import config from "./assets/js/config/config";
import App from "./pages/app";
// import IndexHome from "./pages/home/index";
// import NewDetails from "../pages/news/details"
// import GoodIndex from "../pages/goods/index"
// import ProfileIndex from "../pages/profile/index"
// import LoginIndex from "../pages/login/index"
// import AxiosIndex from "../pages/axios/index"
class RouterComponent extends Component {
  constructor() {
    super();
    this.state = {
      msg: "hello world",
    };
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>
              <Route path={config.path + "home"} component={App}></Route>
              <Redirect to={config.path + "home/index"}></Redirect>
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>

      // <div
      //   onClick={() => {
      //     alert(this.state.msg);
      //   }}
      // >
      //   是我 我是router
      // </div>
    );
  }
}

export default RouterComponent;
