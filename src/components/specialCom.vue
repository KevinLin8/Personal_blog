<template>
  <div class="special_container">
    <div class="card">
      <img src="../assets/imges/special_BG1.jpeg" alt="" />
    </div>
    <div class="card">
      <img src="../assets/imges/special_BG2.jpeg" alt="" />
    </div>
    <div class="card">
      <img src="../assets/imges/special_BG3.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "specialCom",
};
</script>

<style lang="less" scoped>
.special_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  cursor: pointer;
}
.card {
  width: 253px;
  height: 120px;
  position: relative;
  margin: 10px;
}

img {
  width: 100%;
  height: 100%;
  border: none;
  transition: all 0.5s;
}
.card:hover {
  img {
    transform: scale(0.9);
  }
}
</style>
