<template>
  <div class="title_container">
    <div class="l">
      <i class="iconfont icon-weblanmutiao_jingxuantuijian"></i>
      <h3>推荐专栏</h3>
    </div>
    <div class="r">
      <i class="iconfont icon-quanbu"></i>
      <h3>全部专栏</h3>
    </div>
  </div>
</template>

<script>
export default {};
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
