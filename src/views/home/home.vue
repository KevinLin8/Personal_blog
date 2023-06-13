<template>
  <div id="home" class="warp">
    <main class="content">
      <!-- 轮播图组件 Swiper-->
      <Swiper />
      <!-- 标题组件  Title-->
      <Title />
      <!--专栏组件 Special  -->
      <Special />
      <!-- 文章组件 Article -->
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </main>
    <!-- 侧边栏组件 Side-->
    <Side />
    <backToTop />
  </div>
</template>

<script>
import Swiper from "../../components/swiperCom.vue";
import Side from "../../components/sideCom.vue";
import Article from "../../components/articleCom.vue";
import Title from "../../components/titleCom.vue";
import Special from "../../components/specialCom.vue";
import backToTop from "../../components/backToTopCom.vue";

export default {
  name: "home",
  components: { Swiper, Side, Article, Title, Special, backToTop },
  methods: {},
};
</script>

<style lang="less">
#home {
  height: auto;
  display: flex;
  justify-content: space-between;
  .content {
    width: 880px;
    height: 100%;
    margin: 10px;
  }
}
</style>
