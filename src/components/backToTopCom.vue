<template>
  <div class="top" @click="backToTop">
    <button>↑</button>
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
  button {
    font-size: 20px;
    background-color: white;
    color: black;
    width: 45px;
    height: 45px;
    opacity: 0.75;
    border: 1px solid #e7eae8;
    border-radius: 8px;
    cursor: pointer;
    animation: bounce_513 1s infinite;
  }

  @keyframes bounce_513 {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
}
</style>
