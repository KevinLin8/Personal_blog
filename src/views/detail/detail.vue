<template>
  <div class="detail warp">
    <div class="detail_container">
      <div class="ARTICLE_">
        <nav class="nav">
          <ul>
            <li class="title">
              <i class="iconfont icon-mulu"></i>&ensp;文章目录
            </li>
            <li
              v-for="item in articletitlelist"
              :key="item.id"
              class="nav-item"
            >
              <a :href="item.id">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
        <div class="nav_icon">
          <button class="btn" @click="articleLikes">
            <svg
              class="icon"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ref="icon"
            >
              <path
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              ></path>
            </svg>
          </button>
          <i @click="goToTheCommentSection" class="iconfont icon-pinglun2"></i>
        </div>
        <ul class="breadCrumbs">
          <li class="icon">
            <i class="iconfont icon-shouyetianchong"></i><span>首页</span>
          </li>
          /
          <li>{{ articletype }}</li>
          /
          <li>正文</li>
        </ul>
        <div class="author user">
          <div class="img">
            <img src="../../assets/imges/avatar.jpg" alt="" />
          </div>
          <div class="nickname">
            <p class="name">程序猿林萧</p>
            <p class="signature">
              <span>{{ create_time }}&ensp;{{ numberOfComments }} 评论</span>
              &nbsp;/&nbsp;
              <span>{{ like }} 点赞</span>
              &nbsp;/&nbsp;
              <span>{{ see }} 阅读</span>
            </p>
          </div>
        </div>
        <h1 class="title">{{ title }}</h1>
        <div class="container" v-html="htmlContent"></div>
      </div>
      <div class="commentArea">
        <Comment v-if="ArticleID" :ArticleID="ArticleID" />
      </div>
    </div>
    <Side :IsWechatCodeShow="true" />
    <BackTop />
  </div>
</template>

<script>
import Side from "../../components/sideCom.vue";
import { formatTime, CheckArticleType } from "../../tool";
import {
  GetSpecifiedArticles,
  UpdateArticleLikesOrViews,
} from "../../api/request";
import Comment from "../../components/comment.vue";
import BackTop from "../../components/backToTopCom.vue";
export default {
  name: "detail",
  components: {
    Side,
    Comment,
    BackTop,
  },
  data() {
    return {
      //左侧文章导航
      articletitlelist: [],
      //文章html
      htmlContent: "",
      //   文章类型
      articletype: "",
      // 文章创建时间
      create_time: "",
      //  文章评论
      numberOfComments: 0,
      // 文章点赞
      like: 0,
      // 观看数
      see: 0,
      // 文章标题
      title: "",
      //   文章ID
      ArticleID: 0,
      //  控制点赞样式
      islike: false,
    };
  },
  computed: {},
  methods: {
    // 时间格式化
    formatTime,
    // 校验文章类型
    CheckArticleType,
    // 电梯导航
    elevatorNavigation() {
      this.$nextTick(() => {
        // 获取所有的导航链接
        const links = document.querySelectorAll(".detail .nav-item a");
        // 获取所有的内容区块
        const sections = document.querySelectorAll(".section");
        // 监听窗口滚动事件
        window.addEventListener("scroll", function () {
          // 获取滚动条的位置
          const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          // 遍历所有的内容区块
          sections.forEach(function (section) {
            // 获取内容区块的位置信息
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;
            // 判断当前内容区块是否在可视范围内
            if (
              scrollTop >= offsetTop &&
              scrollTop < offsetTop + offsetHeight
            ) {
              // 如果在可视范围内，则将对应的导航链接设置为 active 状态
              links.forEach(function (link) {
                if (
                  link.getAttribute("href") ===
                  "#" + section.getAttribute("id")
                ) {
                  link.classList.add("active");
                } else {
                  link.classList.remove("active");
                }
              });
            }
          });
        });
        // 监听所有的导航链接的点击事件
        links.forEach(function (link) {
          link.addEventListener("click", function (event) {
            event.preventDefault();
            // 获取目标内容区块的位置信息
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            const targetOffsetTop = targetSection.offsetTop;
            // 使用动画滑动到目标内容区块
            window.scrollTo({
              top: targetOffsetTop,
              behavior: "smooth",
            });
          });
        });
      });
    },
    // 获取文章数据
    async getArticleData() {
      let Articledata = await GetSpecifiedArticles(this.$route.params.id);
      let articledataObj = Articledata.data[0];
      this.articletitlelist = articledataObj.articletitlelist
        ? JSON.parse(articledataObj.articletitlelist)
        : [];
      this.htmlContent = articledataObj.htmlContent;
      this.articletype = this.CheckArticleType(articledataObj.type);
      this.create_time = this.formatTime(articledataObj.create_time);
      this.numberOfComments = articledataObj.comment;
      this.like = articledataObj.like;
      this.see = articledataObj.see;
      this.title = articledataObj.title;
      this.ArticleID = articledataObj.id;
    },
    // 定位到评论区
    goToTheCommentSection() {
      let commentArea = document.querySelector(".commentArea");
      const targetOffsetTop = commentArea.offsetTop;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    },
    async articleLikes() {
      this.islike = !this.islike;
      if (this.islike) {
        this.$refs.icon.style.fill = "#fd1853";
        const UpdateResult = await UpdateArticleLikesOrViews(this.ArticleID, {
          watchOrLike: 2,
        });
        this.getArticleData();
      } else {
        this.$refs.icon.style.fill = "#cec6c6";
        const UpdateResult = await UpdateArticleLikesOrViews(this.ArticleID, {
          watchOrLike: 3,
        });
        this.getArticleData();
      }
    },
  },
  async mounted() {
    this.elevatorNavigation();
  },
  async created() {
    this.getArticleData();
    this.$watch("articletitlelist", (newVal) => {
      if (newVal.length > 0) {
        this.elevatorNavigation();
      }
    });
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.active {
  color: rgb(34, 183, 132);
  border-left: 1px solid rgb(34, 183, 132);
}
.detail {
  display: flex;
  justify-content: space-between;
  height: auto;
  color: aliceblue;
  margin-top: 10px;
  .detail_container {
    width: calc(100% - 310px);
  }
  .ARTICLE_ {
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px 10px 0 0;
    margin-top: 10px;
  }
  .nav {
    position: fixed;
    width: auto;
    height: auto;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 20px;
    font-family: "Times New Roman", Times, serif;
    .title {
      color: #cec6c6;
      font-size: 15px;
      text-align: left;
    }
    .nav-item {
      margin: 10px 0;
      margin-top: 20px;
    }
    li {
      width: 100%;
      cursor: pointer;
      a {
        color: #cec6c6;
        text-decoration: none;
        display: block;
        font-size: 13px;
        padding-left: 5px;
      }
    }
  }
  .nav_icon {
    position: fixed;
    height: auto;
    left: 40px;
    top: 80%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 80px;
    .iconfont {
      font-size: 25px;
      cursor: pointer;
      color: #cec6c6;
      margin-top: 20px;
    }
    .icon-pinglun2:active {
      color: rgb(34, 183, 132);
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: none;
      background-color: transparent;
      position: relative;
    }
    .btn .icon {
      fill: #cec6c6;
    }
    .btn:hover > .icon {
      transform: scale(1.2);
      cursor: pointer;
      transition: 0.2s linear;
    }

    @keyframes grosseur {
      0% {
        width: 50px;
        height: 50px;
        fill: #fd1853;
      }

      100% {
        width: 30px;
        height: 30px;
        fill: #fd1853;
      }
    }
  }
}
.breadCrumbs {
  display: flex;
  align-items: center;
  position: relative;
  height: 20px;
  line-height: 20px;
  font-family: "宋体";
  color: #ccc;
  font-size: 13px;
  .icon {
    i {
      display: block;
      height: 100%;
      line-height: 16px;
    }
    display: flex;
    align-items: center;
  }
  li {
    cursor: pointer;
    height: 100%;
    vertical-align: bottom;
    &:hover {
      color: #0cc;
    }
  }
}

.user {
  margin-top: 30px;
}
.detail .container {
  width: 100%;
  height: auto;
}
.title {
  text-align: center;
  font-size: 23px;
  color: #0cc;
  margin-top: 20px;
  text-shadow: 10px 10px 0 0 #0cc;
}

.commentArea {
  width: 100%;
  height: auto;
  margin-top: 20px;
}
</style>
