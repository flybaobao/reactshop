import React from "react";
import Css from "../../../assets/css/home/index/index.css";
// import config from "../.././../assets/js/config/config";
import iconSearch from "../../../assets/images/home/search_icon1.png";
import iconFeed from "../../../assets/images/home/feedback-btn.png";
import Swiper from "../../../assets/js/lib/swiper";
import "../../../assets/css/common/swiper.css";
export default class IndexComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    new Swiper(".swiper-container", {
      // direction: "vertical",//纵向滚动
      loop: true,
      // autoplay: true,
      // 如果需要分页器
      pagination: ".swiper-pagination",

      // 如果需要前进后退按钮
      // nextButton: ".swiper-button-next",
      // prevButton: ".swiper-button-prev",

      // 如果需要滚动条
      // scrollbar: ".swiper-scrollbar",
    });
  }
  render() {
    return (
      <div>
        <div
          className={Css["search-header"] + " " + Css["search-header-scroll"]}
        >
          <div className={Css["search-list"]}>
            <img className={Css["style-list"]} src={iconFeed} alt="" />
          </div>
          <div className={Css["search-box"]}>
            <img className={Css["search-icon"]} src={iconSearch} alt="" />
            <input
              className={Css["search-input"]}
              type="text"
              placeholder="请输入喜欢的宝贝名称"
            />
          </div>
          <div className={Css["home-login"]}>登录</div>
        </div>
        {/* +{config.rootUrl} +{config.path} */}
        {/* 轮播图 */}
        <div class={Css["swiper-box"]}>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div class={Css["red"]}>Slide 9</div>
              </div>
              <div className="swiper-slide">
                <div class={Css["yel"]}>Slide 2</div>
              </div>
              <div className="swiper-slide">
                <div class={Css["blu"]}>Slide7</div>
              </div>
            </div>
            {/* <!-- 如果需要分页器 --> */}
            <div className="swiper-pagination"></div>

            {/* <!-- 如果需要导航按钮 --> */}
            {/* <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> */}

            {/* <!-- 如果需要滚动条 --> */}
            {/* <div class="swiper-scrollbar"></div> */}
          </div>
          {/* 导航等组件可以放在container之外 */}
        </div>
        {/* 内容区域 */}
        <div class={Css["foods-contents"]}>
          {/* 导航 */}
          <div class={Css["contents-nav"]}>
            <div class={Css["nav-item"]}>
              <img src="" alt="" />
              <span>女装</span>
            </div>
            <div class={Css["nav-item"]}>男装</div>
            <div class={Css["nav-item"]}>手机</div>
            <div class={Css["nav-item"]}>电脑</div>
          </div>
          {/* 分区 */}
          <div class={Css["contents-product"]}>
            <div class={Css["product-item"]}></div>
            <div class={Css["product-item"]}></div>
            <div class={Css["product-item"]}></div>
            <div class={Css["product-item"]}></div>
          </div>
        </div>
      </div>
    );
  }
}
// "small-tools/instructions/select-instructions-menu"
