<template>
  <div class="special_container">
    <div
      class="card"
      v-for="(item, index) in columnData"
      :key="index"
      @click="filterDataToTheArticlePage(item.type)"
    >
      <img :src="item.imgurl" alt="图片无法展示" />
      <div class="Overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "specialCom",
  props: ["columnData", "ArticleList"],
  methods: {
    filterDataToTheArticlePage(type) {
      this.$router.push({ path: "/article", query: { type } });
    },
  },
};
</script>

<style lang="less" scoped>
@back: #292929;
@text: #cec6c6;
@textstyle: "Times New Roman", Times, serif;
.special_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  cursor: pointer;
}
.card {
  width: 253px;
  height: 120px;
  position: relative;
  margin: 10px;
  overflow: hidden;
  .Overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: block;
    transition: all 0.5s;
  }
  &:hover {
    .Overlay {
      display: none;
    }
    img {
      transform: scale(1.1);
    }
  }
}

img {
  width: 100%;
  height: 120px;
  border: none;
  transition: all 0.5s;
}
</style>
