<template>
  <div>
    <div
      v-for="(item, index) in ArticleList"
      :key="index"
      class="article_container"
      @click="skiparticledetail(item)"
    >
      <div class="img_box">
        <div class="Sliding"></div>
        <img
          class="img"
          :src="item.imgsrc || item.file_img"
          alt="图片无法展示"
        />
        <div class="time">{{ formatTime(item.create_time) }}</div>
      </div>
      <div class="content">
        <div class="content_text">
          <h3 class="title">{{ item.title }}</h3>
          <p class="description">
            {{ item.description }}
          </p>
        </div>
        <ul class="related">
          <li>{{ formatTime(item.create_time) }}&nbsp;</li>
          /
          <li>
            &nbsp;<i class="iconfont icon-chakan2"></i>&nbsp;{{
              item.see
            }}&nbsp;
          </li>
          /
          <li>
            &nbsp;<i class="iconfont icon-pinglun"></i>&nbsp;{{
              item.comment
            }}&nbsp;
          </li>
          /
          <li>
            &nbsp;<i class="iconfont icon-dianzan"></i>&nbsp;{{ item.like }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from "../tool";
import { UpdateArticleLikesOrViews } from "../api/request";
export default {
  data() {
    return {};
  },
  props: ["ArticleList"],
  computed: {},
  async mounted() {},
  methods: {
    async skiparticledetail(article) {
      let id = article.id;
      const UpdateResult = await UpdateArticleLikesOrViews(id, {
        watchOrLike: 1,
      });
      this.$router.push(`/detail/${id}`);
    },
    formatTime,
  },
};
</script>

<style lang="less" scoped>
@back: #292929;
@text: #cec6c6;
@textstyle: "Times New Roman", Times, serif;
.article_container {
  width: 100%;
  height: 140px;
  border-bottom: 1px solid #292929;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  background: linear-gradient(90deg, #0cc, #0cc);
  background-position: 0 0;
  background-size: 1px 1px;
  background-repeat: no-repeat;
  transition: all 1s ease;
  .img_box {
    padding-left: 5px;
    position: relative;
    overflow: hidden;
    max-height: 120px;
    .Sliding {
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      background-color: #0cc;
      transition: all 0.3s ease;
    }
    .time {
      position: absolute;
      right: -100px;
      top: 0;
      width: 70px;
      height: 15px;
      transition: all 0.3s ease;
      text-align: center;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      font-size: 12px;
      line-height: 15px;
      font-family: "Times New Roman", Times, serif;
      color: #fff;
    }
    .img {
      width: 200px;
      height: 100%;
      border: none;
    }
  }
  &:hover {
    .Sliding {
      height: 20px;
      width: 1px;
      border-radius: 1px;
    }
    .time {
      transform: translateX(-100px);
    }
  }

  .content {
    width: 100%;
    height: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content_text {
      .title {
        font-size: 18px;
        color: #fff;
        font-family: @textstyle;
      }
      .description {
        font-size: 13px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden; //溢出内容隐藏
        text-overflow: ellipsis; //文本溢出部分用省略号表示
        display: -webkit-box; //特别显示模式
        -webkit-line-clamp: 2; //行数
        line-clamp: 2;
        -webkit-box-orient: vertical; //盒子中内容竖直排列
        color: @text;
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 20px;
        line-height: 20px;
      }
    }

    .related {
      display: flex;
      font-size: 13px;
      color: #858282;
      line-height: 13px;
      li {
        cursor: pointer;
      }
    }
  }
}
</style>
