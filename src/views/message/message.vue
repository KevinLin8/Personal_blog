<template>
  <div id="message" class="warp">
    <h2 class="title">留言板</h2>
    <div class="author">
      <div class="img">
        <img src="../../assets/imges/avatar.jpg" alt="" />
      </div>
      <div class="nickname">
        <p class="name">程序猿林萧</p>
        <p class="signature">
          {{ time.hours + ":" + time.minutes + ":" + time.seconds }}
        </p>
      </div>
    </div>
    <ul class="message_container" ref="msg">
      <li
        class="message_item"
        v-for="(item, index) in CommentList"
        :key="index"
      >
        <div class="YoutubeVideo">
          <div class="Image">{{ item.content }}</div>
          <div class="Icon iconfont icon-touxiang_avatar"></div>
          <div class="Title">{{ formatDateTime(item.create_time) }}</div>
          <div class="Name">{{ item.user_nickname }}</div>
        </div>
      </li>
    </ul>
    <div class="review">
      <div class="animation">
        <div class="box-of-star1">
          <div class="star star-position1"></div>
          <div class="star star-position2"></div>
          <div class="star star-position3"></div>
          <div class="star star-position4"></div>
          <div class="star star-position5"></div>
          <div class="star star-position6"></div>
          <div class="star star-position7"></div>
        </div>
        <div class="box-of-star2">
          <div class="star star-position1"></div>
          <div class="star star-position2"></div>
          <div class="star star-position3"></div>
          <div class="star star-position4"></div>
          <div class="star star-position5"></div>
          <div class="star star-position6"></div>
          <div class="star star-position7"></div>
        </div>
        <div class="box-of-star3">
          <div class="star star-position1"></div>
          <div class="star star-position2"></div>
          <div class="star star-position3"></div>
          <div class="star star-position4"></div>
          <div class="star star-position5"></div>
          <div class="star star-position6"></div>
          <div class="star star-position7"></div>
        </div>
        <div class="box-of-star4">
          <div class="star star-position1"></div>
          <div class="star star-position2"></div>
          <div class="star star-position3"></div>
          <div class="star star-position4"></div>
          <div class="star star-position5"></div>
          <div class="star star-position6"></div>
          <div class="star star-position7"></div>
        </div>
        <div class="astronaut" data-js="astro">
          <div class="head"></div>
          <div class="arm arm-left"></div>
          <div class="arm arm-right"></div>
          <div class="body">
            <div class="panel"></div>
          </div>
          <div class="leg leg-left"></div>
          <div class="leg leg-right"></div>
          <div class="schoolbag"></div>
        </div>
      </div>
      <InputText firstLevelOrSecondLevel="1" parentComponentName="message" />
    </div>
    <div class="review_list_container">
      <Comment
        title="全部留言"
        parentComponentName="message"
        :isTheTopInputBoxDisplayed="false"
      />
    </div>
  </div>
</template>

<script>
import Comment from "../../components/comment.vue";
import InputText from "../../components/inputText.vue";
import { GetAllMessages } from "../../api/request";
import { formatDateTime } from "../../tool/index";
export default {
  name: "message",
  components: {
    Comment,
    InputText,
  },
  data() {
    return {
      time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      CommentList: [],
    };
  },
  beforeUnmount() {
    this._observer.disconnect();
  },
  beforeDestroy() {
    this._observer.disconnect();
  },
  mounted() {
    setInterval(this.gettime, 1000);
    this._observer = new MutationObserver((mutationList) => {
      if (mutationList.length == this.CommentList.length) {
        let avatar = document.querySelectorAll(".YoutubeVideo .Icon");
        avatar.forEach((item) => {
          item.style.color = this.getRandomColor();
        });
        this.Randomarrangement();
      }
    });

    this._observer.observe(this.$refs.msg, { childList: true });
  },
  created() {
    this.gettime();
    this.getMessageData();
  },
  computed: {},
  watch: {},
  methods: {
    formatDateTime,
    // 随机颜色
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    // 获取留言数据
    async getMessageData() {
      let commentdata = await GetAllMessages();
      this.CommentList = commentdata.data.filter(
        (item) => item.comment_level == 1
      );
    },
    gettime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      this.time.hours = hours;
      this.time.minutes = minutes;
      this.time.seconds = seconds;
    },
    Randomarrangement() {
      this.$nextTick(() => {
        let zIndexNum = 0;
        var isDrop = false;
        let element = this.$refs.msg;
        let msglist = Array.from(element.children);
        let theXCoordinateOfTheMouseRelativeToTheDIV = 0;
        let yCoordinateOfMouseRelativeToDIV = 0;
        const checkwidth =
          element.getBoundingClientRect().width -
          msglist[0].getBoundingClientRect().width;
        const checkhigth =
          element.getBoundingClientRect().height -
          msglist[0].getBoundingClientRect().height;
        msglist.forEach((item, index) => {
          let randomleft = Math.floor(Math.random() * (checkwidth - 5 + 1) + 5);
          let randomtop = Math.floor(Math.random() * (checkhigth - 5 + 1) + 5);
          item.style.left = randomleft + "px";
          item.style.top = randomtop + "px";
          item.style.zIndex = zIndexNum++;
          item.setAttribute("x", randomleft);
          item.setAttribute("y", randomtop);
          item.addEventListener("mousedown", (event) => {
            console.log("mousedown");
            isDrop = true;
            const curDom = event.target.parentNode.parentNode;
            var e = e || window.event;
            theXCoordinateOfTheMouseRelativeToTheDIV = e.offsetX;
            yCoordinateOfMouseRelativeToDIV = e.offsetY;
            if (curDom.className.indexOf("message_item") !== -1) {
              curDom.style.zIndex = zIndexNum++;
            }
          });
          item.addEventListener("mouseup", (e) => {
            isDrop = false;
          });
          item.addEventListener("mouseleave", (e) => {
            isDrop = false;
          });
          item.addEventListener("mousemove", (e) => {
            if (isDrop) {
              let x =
                e.clientX -
                element.getBoundingClientRect().left -
                theXCoordinateOfTheMouseRelativeToTheDIV;
              let y =
                e.clientY -
                element.getBoundingClientRect().top -
                yCoordinateOfMouseRelativeToDIV;
              if (x <= 0) x = 0;
              if (y <= 0) y = 0;
              if (x >= checkwidth) x = checkwidth;
              if (y >= checkhigth) y = checkhigth;
              item.style.left = x + "px";
              item.style.top = y + "px";
            } else {
              return;
            }
          });
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
#message {
  height: 700px;
  //   background-color: rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  .title {
    font-size: 20px;
    color: rgb(255, 255, 236);
    text-align: center;
    height: 80px;
    line-height: 80px;
    font-weight: 900;
    font-family: "Times New Roman", Times, serif;
  }
  .message_container {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    .message_item {
      position: absolute;
      .YoutubeVideo {
        width: 250px;
        height: 220px;
        background: transparent;
      }
      .Image {
        width: 250px;
        height: 154px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.9);
        font-family: "Times New Roman", Times, serif;
        font-size: 12px;
        padding: 20px;
        box-sizing: border-box;
      }

      .Icon {
        width: 40px;
        height: 40px;
        border-radius: 100px;
        text-align: center;
        line-height: 40px;
        float: right;
        background-color: rgba(0, 0, 0, 0.9);
        transform: translate(0px, 10px);
      }

      .Title {
        width: 180px;
        height: 15px;
        border-radius: 2px;
        float: right;
        background-color: rgba(0, 0, 0, 0.9);
        transform: translate(-15px, 10px);
        font-size: 12px;
        font-family: "Times New Roman", Times, serif;
      }

      .Name {
        width: 100px;
        height: 15px;
        border-radius: 2px;
        float: right;
        background-color: rgba(0, 0, 0, 0.9);
        transform: translate(-15px, 20px);
        font-family: "Times New Roman", Times, serif;
        font-size: 12px;
      }
    }
  }
  .review {
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    .animation {
      width: 40%;
      height: 300px;
      position: relative;
    }
    @keyframes snow {
      0% {
        opacity: 0;
        transform: translateY(0px);
      }

      20% {
        opacity: 1;
      }

      100% {
        opacity: 1;
        transform: translateY(650px);
      }
    }

    @keyframes astronaut {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    .box-of-star1,
    .box-of-star2,
    .box-of-star3,
    .box-of-star4 {
      width: 100%;
      position: absolute;
      z-index: 10;
      left: 0;
      transform: translateY(650px);
      height: 700px;
    }

    .box-of-star1 {
      animation: snow 5s linear infinite;
    }

    .box-of-star2 {
      animation: snow 5s -1.64s linear infinite;
    }

    .box-of-star3 {
      animation: snow 5s -2.3s linear infinite;
    }

    .box-of-star4 {
      animation: snow 5s -3.3s linear infinite;
    }

    .star {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      z-index: 10;
      opacity: 0.7;
    }

    .star:before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      z-index: 10;
      top: 80px;
      left: 70px;
      opacity: 0.7;
    }

    .star:after {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      z-index: 10;
      top: 8px;
      left: 170px;
      opacity: 0.9;
    }

    .star-position1 {
      top: 30px;
      left: 20px;
    }

    .star-position2 {
      top: 110px;
      left: 250px;
    }

    .star-position3 {
      top: 60px;
      left: 570px;
    }

    .star-position4 {
      top: 120px;
      left: 900px;
    }

    .star-position5 {
      top: 20px;
      left: 1120px;
    }

    .star-position6 {
      top: 90px;
      left: 1280px;
    }

    .star-position7 {
      top: 30px;
      left: 1480px;
    }

    .astronaut {
      width: 250px;
      height: 300px;
      position: absolute;
      z-index: 11;
      top: calc(50% - 150px);
      left: calc(50% - 125px);
      animation: astronaut 5s linear infinite;
    }

    .schoolbag {
      width: 100px;
      height: 150px;
      position: absolute;
      z-index: 1;
      top: calc(50% - 75px);
      left: calc(50% - 50px);
      background-color: #94b7ca;
      border-radius: 50px 50px 0 0 / 30px 30px 0 0;
    }

    .head {
      width: 97px;
      height: 80px;
      position: absolute;
      z-index: 3;
      background: -webkit-linear-gradient(
        left,
        #e3e8eb 0%,
        #e3e8eb 50%,
        #fbfdfa 50%,
        #fbfdfa 100%
      );
      border-radius: 50%;
      top: 34px;
      left: calc(50% - 47.5px);
    }

    .head:after {
      content: "";
      width: 60px;
      height: 50px;
      position: absolute;
      top: calc(50% - 25px);
      left: calc(50% - 30px);
      background: -webkit-linear-gradient(
        top,
        #15aece 0%,
        #15aece 50%,
        #0391bf 50%,
        #0391bf 100%
      );
      border-radius: 15px;
    }

    .head:before {
      content: "";
      width: 12px;
      height: 25px;
      position: absolute;
      top: calc(50% - 12.5px);
      left: -4px;
      background-color: #618095;
      border-radius: 5px;
      box-shadow: 92px 0px 0px #618095;
    }

    .body {
      width: 85px;
      height: 100px;
      position: absolute;
      z-index: 2;
      background-color: #fffbff;
      border-radius: 40px / 20px;
      top: 105px;
      left: calc(50% - 41px);
      background: -webkit-linear-gradient(
        left,
        #e3e8eb 0%,
        #e3e8eb 50%,
        #fbfdfa 50%,
        #fbfdfa 100%
      );
    }

    .panel {
      width: 60px;
      height: 40px;
      position: absolute;
      top: 20px;
      left: calc(50% - 30px);
      background-color: #b7cceb;
    }

    .panel:before {
      content: "";
      width: 30px;
      height: 5px;
      position: absolute;
      top: 9px;
      left: 7px;
      background-color: #fbfdfa;
      box-shadow: 0px 9px 0px #fbfdfa, 0px 18px 0px #fbfdfa;
    }

    .panel:after {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      top: 9px;
      right: 7px;
      background-color: #fbfdfa;
      border-radius: 50%;
      box-shadow: 0px 14px 0px 2px #fbfdfa;
    }

    .arm {
      width: 80px;
      height: 30px;
      position: absolute;
      top: 121px;
      z-index: 2;
    }

    .arm-left {
      left: 30px;
      background-color: #e3e8eb;
      border-radius: 0 0 0 39px;
    }

    .arm-right {
      right: 30px;
      background-color: #fbfdfa;
      border-radius: 0 0 39px 0;
    }

    .arm-left:before,
    .arm-right:before {
      content: "";
      width: 30px;
      height: 70px;
      position: absolute;
      top: -40px;
    }

    .arm-left:before {
      border-radius: 50px 50px 0px 120px / 50px 50px 0 110px;
      left: 0;
      background-color: #e3e8eb;
    }

    .arm-right:before {
      border-radius: 50px 50px 120px 0 / 50px 50px 110px 0;
      right: 0;
      background-color: #fbfdfa;
    }

    .arm-left:after,
    .arm-right:after {
      content: "";
      width: 30px;
      height: 10px;
      position: absolute;
      top: -24px;
    }

    .arm-left:after {
      background-color: #6e91a4;
      left: 0;
    }

    .arm-right:after {
      right: 0;
      background-color: #b6d2e0;
    }

    .leg {
      width: 30px;
      height: 40px;
      position: absolute;
      z-index: 2;
      bottom: 70px;
    }

    .leg-left {
      left: 76px;
      background-color: #e3e8eb;
      transform: rotate(20deg);
    }

    .leg-right {
      right: 73px;
      background-color: #fbfdfa;
      transform: rotate(-20deg);
    }

    .leg-left:before,
    .leg-right:before {
      content: "";
      width: 50px;
      height: 25px;
      position: absolute;
      bottom: -26px;
    }

    .leg-left:before {
      left: -20px;
      background-color: #e3e8eb;
      border-radius: 30px 0 0 0;
      border-bottom: 10px solid #6d96ac;
    }

    .leg-right:before {
      right: -20px;
      background-color: #fbfdfa;
      border-radius: 0 30px 0 0;
      border-bottom: 10px solid #b0cfe4;
    }
  }
}

.review_list_container {
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1px 10px;
  box-sizing: border-box;
  position: relative;
  z-index: 999;
}
</style>
