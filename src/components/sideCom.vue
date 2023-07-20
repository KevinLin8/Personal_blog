<template>
  <div class="side">
    <div class="author_info Fillet_corner">
      <div class="card">
        <div class="icon"></div>
        <p class="title">程序猿林萧</p>
        <p class="text">Make a little progress every day</p>
        <div class="community">
          <el-tooltip
            class="item"
            effect="dark"
            content="2367884500"
            placement="top"
          >
            <a class="iconfont icon-qq"></a>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="xiao13022087579@163.com"
            placement="top"
          >
            <a class="iconfont icon-youxiang"></a>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="点击跳转"
            placement="top"
          >
            <a
              class="iconfont icon-github"
              href="https://github.com/KevinLin8"
              target="_blank"
            ></a>
          </el-tooltip>

          <el-tooltip
            class="item"
            effect="dark"
            content="Be reborn"
            placement="top"
          >
            <a class="iconfont icon-zhihu-circle-fill"></a>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="暂无开源项目"
            placement="top"
          >
            <a class="iconfont icon-gitee"></a>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="暂未上传资源"
            placement="top"
          >
            <a class="iconfont icon-icon_bilibili-square"></a>
          </el-tooltip>
        </div>
      </div>
    </div>
    <div class="vxcard Fillet_corner">
      <img class="face ANIMATIONS" src="../assets/imges/vx2.jpg" alt="" />
      <img class="back ANIMATIONS" src="../assets/imges/vx.jpg" alt="" />
    </div>
    <div class="message Fillet_corner">
      <h3 class="title">
        <i class="iconfont icon-remen"></i>&nbsp;<strong>最新文章</strong>
      </h3>
      <ul class="article_container">
        <li class="item" v-for="(item, index) in GetArticleList" :key="index">
          <span class="text">{{ item.title }}</span
          ><i class="iconfont icon-lianjie icon"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "side",
  mounted() {},
  computed: {
    GetArticleList: function () {
      return this.$store.getters.get_ArticleList;
    },
  },
};
</script>

<style lang="less" scoped>
@back: #292929;
@text: #cec6c6;
@textstyle: "Times New Roman", Times, serif;
// 侧边栏start
.side {
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  .Fillet_corner {
    border-radius: 10px;
  }
  //个人卡片
  .author_info {
    width: 100%;
    height: auto;
    // 资料卡start
    .card {
      width: 100%;
      height: 250px;
      background-color: #292929;
      margin-top: 10px;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 10px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
      border: 2px solid rgba(7, 7, 7, 0.12);
      font-size: 16px;
      transition: all 0.3s ease;
      position: relative;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      font-family: "Poppins", sans-serif;
    }

    .icon {
      margin: 0 auto;
      width: 100%;
      height: 80px;
      max-width: 80px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.8s ease;
      background-image: url("../assets/imges/avatar.jpg");
      background-size: contain;
      background-repeat: no-repeat;
    }
    .card .title {
      width: 100%;
      margin: 0;
      text-align: center;
      margin-top: 30px;
      color: rgb(23, 23, 23);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 4px;
    }

    .card .text {
      width: 80%;
      margin: 0 auto;
      font-size: 13px;
      text-align: center;
      margin-top: 20px;
      font-weight: 200;
      letter-spacing: 2px;
      opacity: 0;
      max-height: 0;
      transition: all 0.3s ease;
      background: linear-gradient(90deg, #0cc, #0cc);
      background-size: 0 1px;
      background-repeat: no-repeat;
      background-position: 0 100%;
    }
    .card .community {
      width: 80%;
      height: 30px;
      opacity: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a {
        display: inline-block;
        &:hover {
          font-size: 28px;
        }
      }
    }

    .card:hover {
      height: 300px;
    }

    .card:hover .text {
      transition: all 1s ease;
      opacity: 1;
      max-height: 40px;
      background-size: 100% 1px;
      color: #0cc;
    }
    .card:hover .community {
      opacity: 1;
      transition: all 0.3s ease;
    }
    .card:hover .icon {
      transition: all 0.3s ease;
      transform: rotate(360deg);
    }
  }
  // 微信二维码start
  .vxcard {
    width: 100%;
    height: 112px;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    perspective: 500px;
    background-color: rgb(5, 193, 96);
    margin-top: 20px;
    .ANIMATIONS {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 10px;
      width: 80%;
      height: 80%;
      position: absolute;
      transition: all 0.5s ease;
    }
    .face {
      z-index: 2;
      backface-visibility: hidden;
      border: none; /* 去除图片边框 */
    }
    .back {
      z-index: 1;
      transform: rotateY(180deg);
      border: none; /* 去除图片边框 */
    }
  }
  .vxcard:hover .face {
    transform: rotateY(180deg);
  }
  .vxcard:hover .back {
    transform: rotateY(360deg);
  }
  // 文章start
  .message {
    margin-top: 20px;
    width: 100%;
    height: auto;
    // min-height: 240px;
    background-color: @back;
    padding: 0 10px;
    box-sizing: border-box;
    overflow-y: auto; /* 将横向滚动条显示出来 */
    position: relative;
    h3.title {
      height: 40px;
      font-family: "Times New Roman", Times, serif;
      line-height: 40px;
      color: @text;
      border-bottom: 1px solid #6e6e6e;
    }
    .article_container {
      padding: 10px 0;
      font-family: @textstyle;
      .item {
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        cursor: pointer;
        background: linear-gradient(90deg, #0cc, #0cc);
        background-size: 0 1px;
        background-repeat: no-repeat;
        background-position: 0 100%;
        transition: all 1s ease;
        .text {
          display: block;
          width: 60%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        &:hover {
          background-size: 100% 1px;
          color: #0cc;
          .icon {
            color: #0cc;
            transform: rotate(45deg);
          }
        }
      }
    }
  }
}
</style>
