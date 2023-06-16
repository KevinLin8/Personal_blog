<template>
  <div id="special" class="warp">
    <main class="content">
      <Title :isRecommendedShow="false" />
      <Special :imglist="allimglist" />
    </main>
    <!-- 侧边栏组件 Side-->
    <Side />
  </div>
</template>

<script>
import Side from "../../components/sideCom.vue";
import Title from "../../components/titleCom.vue";
import Special from "../../components/specialCom.vue";
export default {
  name: "special",
  components: {
    Side,
    Title,
    Special,
  },
  data() {
    return {
      allimglist: [
        require("../../assets/imges/special_BG1.jpeg"),
        require("../../assets/imges/special_BG2.jpeg"),
        require("../../assets/imges/special_BG3.png"),
        require("../../assets/imges/special_BG4.png"),
        require("../../assets/imges/special_BG5.png"),
        require("../../assets/imges/special_BG6.jpeg"),
        require("../../assets/imges/special_BG7.png"),
        require("../../assets/imges/special_BG8.jpeg"),
        require("../../assets/imges/special_BG9.png"),
        require("../../assets/imges/special_BG10.png"),
        require("../../assets/imges/special_BG11.png"),
        require("../../assets/imges/special_BG12.jpeg"),
        require("../../assets/imges/special_BG13.png"),
        require("../../assets/imges/special_BG14.jpeg"),
        require("../../assets/imges/special_BG15.png"),
        require("../../assets/imges/special_BG16.png"),
        require("../../assets/imges/special_BG17.png"),
        require("../../assets/imges/special_BG18.png"),
      ],
    };
  },
};
</script>

<style lang="less" scoped>
#special {
  height: auto;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
  .content {
    width: 880px;
    height: 100%;
    margin: 10px;
  }
}
</style>
