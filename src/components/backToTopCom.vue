<template>
  <div class="top" @click="backToTop">
    <i class="iconfont icon-33kejichuangxin-huojian"></i>
  </div>
</template>

<script>
export default {
  methods: {
    backToTop() {
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  border-radius: 100%;
  border: 1px solid #0cc;
}
</style>
