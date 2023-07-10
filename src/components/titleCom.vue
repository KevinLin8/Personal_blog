<template>
  <div class="title_container">
    <div class="l" v-if="isRecommendedShow">
      <i class="iconfont icon-weblanmutiao_jingxuantuijian"></i>
      <h3>{{ lefttitle }}</h3>
    </div>
    <div class="r">
      <i class="iconfont icon-quanbu"></i>
      <h3>{{ righttitle }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isRecommendedShow", "lefttitle", "righttitle"],
};
</script>

<style lang="less" scoped>
@back: #292929;
@text: #cec6c6;
@textstyle: "Times New Roman", Times, serif;

.title_container {
  width: 100%;
  height: 45px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  //   background-color: @back;
  margin-top: 10px;
  border-bottom: 1px solid @back;
  .l,
  .r {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    color: #0cc;
    h3 {
      padding-left: 3px;
      font-family: "Times New Roman", Times, serif;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
