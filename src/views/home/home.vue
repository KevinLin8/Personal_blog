<template>
  <div id="home" class="warp">
    <main class="content">
      <Swiper />
    </main>
    <div class="side">
      <div class="author_info Fillet_corner">
        <div class="card">
          <div class="icon"></div>
          <p class="title">Lin Xiao</p>
          <p class="text">Make a little progress every day</p>
          <div class="community">
            <a class="iconfont icon-qq" href="https://ibb.co/wSHDQTR"></a>
            <el-tooltip
              class="item"
              effect="dark"
              content="xiao13022087579@163.com"
              placement="top"
            >
              <a class="iconfont icon-youxiang"></a>
            </el-tooltip>
            <a
              class="iconfont icon-github"
              href="https://github.com/KevinLin8"
            ></a>
            <a class="iconfont icon-zhihu-circle-fill"></a>
            <a class="iconfont icon-gitee"></a>
            <a class="iconfont icon-icon_bilibili-square"></a>
          </div>
        </div>
      </div>
      <div class="wx Fillet_corner"></div>
      <div class="msg Fillet_corner"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "../../components/swiperCom.vue";
export default {
  name: "home",
  components: { Swiper },
  methods: {},
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 4113856 */
  src: url("//at.alicdn.com/t/c/font_4113856_99et4olvm7f.woff2?t=1686298703243")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_4113856_99et4olvm7f.woff?t=1686298703243")
      format("woff"),
    url("//at.alicdn.com/t/c/font_4113856_99et4olvm7f.ttf?t=1686298703243")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-icon_bilibili-square:before {
  content: "\e600";
  color: rgb(55, 91, 156);
}

.icon-qq:before {
  content: "\e62b";
  color: rgb(166, 4, 255);
}

.icon-youxiang:before {
  content: "\e61a";
  color: rgb(72, 115, 237);
}

.icon-github:before {
  content: "\e63a";
  color: rgb(122, 102, 107);
}

.icon-zhihu-circle-fill:before {
  content: "\ea8b";
  color: rgb(18, 150, 219);
}

.icon-gitee:before {
  content: "\e60c";
  color: rgb(199, 29, 35);
}

#home {
  height: 100%;
  display: flex;
  justify-content: space-between;
  main {
    margin: 10px;
  }
  .content {
    width: 880px;
    height: 100%;
  }
  .side {
    width: 300px;
    height: 670px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .Fillet_corner {
      border-radius: 10px;
    }
    .author_info {
      width: 100%;
      height: auto;
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
        background-image: url("../../assets/imges/avatar.jpg");
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
    .wx {
      width: 100%;
      height: 112px;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      background-image: url("../../assets/imges/vx2.jpg");
      background-size: cover;
      background-position: center;
      transition: all 0.3s ease;
    }
    .wx:hover {
      background-image: url("../../assets/imges/vx.jpg");
    }
    .msg {
      width: 100%;
      height: 240px;
      background-color: green;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
