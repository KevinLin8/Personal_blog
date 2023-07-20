<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item, index) in filteredData"
        :key="index"
        @click="Clickonthecarousel(item.id)"
      >
        <img :src="item.imgsrc" alt="" />
        <div class="overlay">
          <h3 class="title">
            {{ item.title }}
          </h3>
          <p class="description">
            {{ item.description }}
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
  async mounted() {
    await this.filterArticleListData(this.ArticleList);
    //await this.addImgsrcAttributeToData();
    this.SwiperConfig();
  },
  props: ["ArticleList"],
  components: {},
  data() {
    return {
      filteredData: [],
      imgList: [
        "https://t7.baidu.com/it/u=137276411,3145763946&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=3219378532,1496797738&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=3244359879,3836150088&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=2368366579,3286138528&fm=193&f=GIF",
      ],
    };
  },
  methods: {
    Clickonthecarousel(id) {
      console.log("点击了图卡", id);
      this.$router.push(`/detail/${id}`);
    },
    // swiper配置
    SwiperConfig() {
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
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
      });
    },
    // 过滤4条数据
    filterArticleListData(data) {
      if (Array.isArray(data)) {
        this.filteredData = data.filter((item, index) => index < 4);
      }
    },
    //新增imgsrc属性
    // addImgsrcAttributeToData() {
    //   this.filteredData = this.filteredData.map((item, index) => {
    //     return {
    //       ...item,
    //       imgsrc: this.imgList[index],
    //     };
    //   });
    // },
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
        height: auto;
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
          color: #d4c6c6;
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
