<template>
  <div class="article warp">
    <main class="content">
      <Titlecom righttitle="全部文章" :isRecommendedShow="false" />
      <Article />
    </main>
    <Side :IsWechatCodeShow="true" />
  </div>
</template>

<script>
import Titlecom from "../../components/titleCom.vue";
import Article from "../../components/articleCom.vue";
import Side from "../../components/sideCom.vue";
export default {
  components: {
    Titlecom,
    Article,
    Side,
  },
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
