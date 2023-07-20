<template>
  <div id="special" class="warp">
    <main class="content">
      <Titlecom :isRecommendedShow="false" righttitle="全部专栏" />
      <Special :columnData="allimglist" />
    </main>
    <!-- 侧边栏组件 Side-->
    <Side :IsWechatCodeShow="true" />
  </div>
</template>

<script>
import Side from "../../components/sideCom.vue";
import Titlecom from "../../components/titleCom.vue";
import Special from "../../components/specialCom.vue";
export default {
  name: "special",
  components: {
    Side,
    Titlecom,
    Special,
  },
  data() {
    return {
      allimglist: [
        { imgurl: require("../../assets/imges/special_BG1.jpeg"), type: 1 },
        { imgurl: require("../../assets/imges/special_BG2.jpeg"), type: 2 },
        { imgurl: require("../../assets/imges/special_BG3.png"), type: 3 },
        { imgurl: require("../../assets/imges/special_BG4.png"), type: 4 },
        { imgurl: require("../../assets/imges/special_BG5.png"), type: 5 },
        { imgurl: require("../../assets/imges/special_BG6.jpeg"), type: 6 },
        { imgurl: require("../../assets/imges/special_BG7.png"), type: 7 },
        { imgurl: require("../../assets/imges/special_BG8.jpeg"), type: 8 },
        { imgurl: require("../../assets/imges/special_BG9.png"), type: 9 },
        { imgurl: require("../../assets/imges/special_BG10.png"), type: 10 },
        { imgurl: require("../../assets/imges/special_BG11.png"), type: 11 },
        { imgurl: require("../../assets/imges/special_BG12.jpeg"), type: 12 },
        { imgurl: require("../../assets/imges/special_BG13.png"), type: 13 },
        { imgurl: require("../../assets/imges/special_BG14.jpeg"), type: 14 },
        { imgurl: require("../../assets/imges/special_BG15.png"), type: 15 },
        { imgurl: require("../../assets/imges/special_BG16.png"), type: 16 },
        { imgurl: require("../../assets/imges/special_BG17.png"), type: 17 },
        { imgurl: require("../../assets/imges/special_BG18.png"), type: 18 },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
#special {
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
