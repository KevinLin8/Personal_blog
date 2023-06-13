<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" @click="Clickonthecarousel">
        <img
          src="https://pic.616pic.com/bg_w1180/00/19/82/3ODH9QCbTH.jpg"
          alt=""
        />
        <div class="overlay">
          <h3 class="title">
            我终于登上了这个榜单！与 Vue 3 和 React 正面
            PK！和全世界框架同台比武！
          </h3>
          <p class="description">
            前些天我终于把我的框架送上了这个榜单js-framework-benchmark，相信很多人都知道这个榜单，这是目前前端框架衡量性能最受欢迎的跑分榜单，非常开心能够上榜和其他框架一起掰头！
          </p>
        </div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "Swiper",
  mounted() {
    new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: true,
      parallax: true,
      effect: "cards",
      autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
    });
  },

  components: {},
  data() {
    return {};
  },
  methods: {
    Clickonthecarousel() {
      console.log("点击了图卡");
    },
  },
};
</script>

<style lang="less">
@back: #292929;
@text: #cec6c6;
@textstyle: "Times New Roman", Times, serif;
.swiper-container {
  width: 880px;
  height: 300px;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
      background-color: @back;
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        border: none;
      }
      .overlay {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 80px;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-weight: 900;
          font-family: @textstyle;
          color: #fff;
        }
        .description {
          font-size: 15px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden; //溢出内容隐藏
          text-overflow: ellipsis; //文本溢出部分用省略号表示
          display: -webkit-box; //特别显示模式
          -webkit-line-clamp: 2; //行数
          line-clamp: 2;
          -webkit-box-orient: vertical; //盒子中内容竖直排列
        }
      }
    }
  }
}
</style>
