<template>
  <div id="dynamic" class="warp">
    <main class="content">
      <h2 class="title">全部动态</h2>
      <div class="author">
        <div class="img">
          <img src="../../assets/imges/avatar.jpg" alt="" />
        </div>
        <div class="nickname">
          <p class="name">程序猿林萧</p>
          <p class="signature">每天进步一点点..</p>
        </div>
      </div>
      <div
        class="dynamic_content"
        v-for="(item, index) in DynamicDataList"
        :key="index"
      >
        <div class="create_time">
          <i class="iconfont icon-wodedongtai icon"></i
          ><span>{{ item.create_time }}</span>
        </div>
        <div class="content_box">
          <div class="content_card">
            <h4 class="say">{{ item.description }}</h4>
            <div class="img_container clearfix">
              <img
                v-for="(img, idx) in item.imgArrayField"
                :key="idx"
                :src="img"
                alt=""
              />
            </div>
            <div class="like">
              <i class="iconfont icon-dianzan1"></i><span>12</span>
              <i style="margin-left: 5px" class="iconfont icon-pinglun"></i
              ><span>12</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- 侧边栏组件 Side-->
    <Side />
  </div>
</template>

<script>
import Side from "../../components/sideCom.vue";
import { GetAllUpdates } from "../../api/request";
export default {
  name: "dynamic",
  components: {
    Side,
  },
  data() {
    return {
      DynamicDataList: [],
    };
  },
  async created() {
    let result = await GetAllUpdates();
    this.DynamicDataList = result.data;
  },
};
</script>

<style lang="less" scoped>
@back: #292929;
@text: #cec6c6;
@textstyle: "Times New Roman", Times, serif;
#dynamic {
  display: flex;
  justify-content: space-between;
  .content {
    width: 880px;
    height: 100%;
    margin: 10px;

    .title {
      font-size: 20px;
      color: rgb(255, 255, 236);
      text-align: center;
      height: 80px;
      line-height: 80px;
      font-weight: 900;
      font-family: "Times New Roman", Times, serif;
    }
    .dynamic_content {
      position: relative;
      padding: 20px;
      width: 100%;
      //   height: 430px;
      height: auto;
      box-sizing: border-box;
      .create_time {
        font-size: 12px;
        background: rgba(0, 0, 0, 0.3);
        height: 20px;
        line-height: 20px;
        display: flex;
        align-items: center;
        width: 100%;
        .icon {
          margin-right: 5px;
        }
      }
      .content_box {
        width: calc(100% - 20px);
        // height: calc(100% - 20px);
        height: auto;
        margin: 10px;
        border-left: 1px dashed #0cc;
        padding: 20px;
        box-sizing: border-box;

        .content_card {
          width: 100%;
          //   height: 100%;
          height: auto;
          border-radius: 0 0 20px 20px;
          background: rgba(0, 0, 0, 0.5);
          box-sizing: border-box;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .say {
            color: @text;
            font-family: @textstyle;
            font-size: 15px;
          }
          .img_container {
            width: 100%;
            // height: 270px;
            height: auto;
            float: left;
            margin-top: 10px;
            overflow-x: auto;
            // max-height: 270px;
            overflow-y: auto;
            img {
              max-width: 240px;
              height: auto;
              border: none;
              vertical-align: bottom;
              margin: 5px;
            }
          }
          .like {
            width: 100%;
            height: 30px;
            box-sizing: border-box;
            padding: 10px;
            vertical-align: middle;
            i {
              cursor: pointer;
            }
            span {
              font-size: 12px;
              font-family: @textstyle;
              color: @text;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
