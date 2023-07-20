<template>
  <div class="article warp">
    <main class="content">
      <Titlecom righttitle="全部文章" :isRecommendedShow="false" />
      <ArticleCom :ArticleList="ArticleList" />
    </main>
    <Side :IsWechatCodeShow="true" />
  </div>
</template>

<script>
import Titlecom from "../../components/titleCom.vue";
import ArticleCom from "../../components/articleCom.vue";
import Side from "../../components/sideCom.vue";
import { GETARTICLELIST } from "../../api/request";
export default {
  data() {
    return {
      ArticleList: [],
    };
  },
  components: {
    Titlecom,
    ArticleCom,
    Side,
  },
  async created() {
    if (!this.$route.query.type) {
      let result = await GETARTICLELIST();
      this.ArticleList = result.data;
      return;
    }
    let result = await GETARTICLELIST({ type: this.$route.query.type || 1 });
    this.ArticleList = result.data;
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.article {
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
