<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fe46eade2-5bca-4a40-8d9e-eb3e5a453918%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688873741&t=cd9262bd94c82610069a4d2d391cfe3d"
          alt=""
        />
      </div>
      <div class="swiper-slide">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5aa16e24-29c1-4051-8c16-fd641778af7f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688873741&t=562f6c2906fbff29a295195db52abf2e"
          alt=""
        />
      </div>
      <div class="swiper-slide">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F7d738ba7-0b2a-423b-b392-5b6ee6a82923%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688873741&t=4d9c4f5c6e4a89b4df246413fd5d151d"
          alt=""
        />
      </div>
      <div class="swiper-slide">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F31991ce9-0a3d-4962-b6e9-bff9c6e09b83%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688873741&t=83c4767a49a2d75c6457d036f9dd3d3d"
          alt=""
        />
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
      direction: "vertical", // 垂直切换选项
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
      autoplay: true,
      parallax: true,
      effect: "cube",
    });
  },

  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
.swiper-container {
  width: 880px;
  height: 300px;
  //   background-color: rgb(23, 23, 23);
  .swiper-wrapper {
    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
