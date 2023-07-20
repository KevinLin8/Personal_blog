<template>
  <div id="home" class="warp">
    <main class="content">
      <!-- 轮播图组件 Swiper-->
      <Swiper v-if="ArticleList.length" :ArticleList="ArticleList" />
      <!-- 标题组件  Title-->
      <Titlecom
        :isRecommendedShow="true"
        lefttitle="推荐专栏"
        righttitle="全部专栏"
      />
      <!--专栏组件 Special  -->
      <Special :columnData="imglist" />
      <!-- 文章组件 Article -->
      <Article :ArticleList="ArticleList" />
    </main>
    <!-- 侧边栏组件 Side-->
    <Side />
  </div>
</template>

<script>
import Swiper from "../../components/swiperCom.vue";
import Side from "../../components/sideCom.vue";
import Article from "../../components/articleCom.vue";
import Titlecom from "../../components/titleCom.vue";
import Special from "../../components/specialCom.vue";
import { GETARTICLELIST } from "../../api/request";
export default {
  name: "home",
  components: { Swiper, Side, Article, Titlecom, Special },
  methods: {},
  data() {
    return {
      imglist: [
        { imgurl: require("../../assets/imges/special_BG1.jpeg"), type: 1 },
        { imgurl: require("../../assets/imges/special_BG2.jpeg"), type: 2 },
        { imgurl: require("../../assets/imges/special_BG3.png"), type: 3 },
      ],
      ArticleList: [],
    };
  },
  async created() {
    let result = await GETARTICLELIST();
    this.ArticleList = result.data;
    this.$store.commit("set_ArticleList", this.ArticleList);
  },
  methods: {},
};
</script>

<style lang="less">
#home {
  display: flex;
  justify-content: space-between;

  .content {
    width: 880px;
    height: 100%;
    margin: 10px;
  }
}
</style>
