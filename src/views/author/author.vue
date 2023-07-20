<template>
  <div class="warp Text_style About_me">
    <main class="content">
      <div class="author">
        <div class="img">
          <img src="../../assets/imges/avatar.jpg" alt="" />
        </div>
        <div class="nickname">
          <p class="name">程序猿林萧</p>
          <p class="signature">每天进步一点点..</p>
        </div>
      </div>
      <div class="Say_it_personally">
        <div class="title">
          <i class="icon iconfont icon-xingbiaoti-"></i>
          <h1>hi &numsp;我是<span>"程序猿林萧"</span></h1>
        </div>
        <p class="introduce">
          欢迎您光临我的个人博客，博主99年出生，喜欢唱.跳.rap.篮球，是一位工作3年的前端开发工程师。
        </p>
        <p class="introduce">
          开发本站主要是因为博主在学习Nestjs过程，觉得技术点零零碎碎，想要整合一下做一个小网站，因此诞生了这个博客网站，本站采用前后端分离开发，前端框架：vue，后端框架：NestJs，数据库：mySql，前端运维：cloudbase，后端运维：serverless
        </p>
        <ul>
          <li><i></i>如果你对我感兴趣，可以加我微信 进一步交流;</li>
          <li><i></i>我的邮箱: 2367884500@qq.com;</li>
        </ul>
      </div>
      <div class="Be_fond_of">
        <div class="card-container">
          <div class="card">
            <div class="front-content">
              <p>最喜欢的动漫</p>
            </div>
            <div class="content">
              <img src="../../assets/imges/ai1.jpg" alt="图片暂无法展示" />
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front-content">
              <p>最喜欢的游戏</p>
            </div>
            <div class="content">
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F98da90e2-2990-4a73-a1f7-b706a648617a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1689823148&t=5d93bf834a602d2e2cf313fd924f6693"
                alt="图片暂无法展示"
              />
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front-content">
              <p>最喜欢的机车</p>
            </div>
            <div class="content">
              <img
                src="https://img2.baidu.com/it/u=2028156276,1150009316&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                alt="图片暂无法展示"
              />
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front-content">
              <p>最喜欢的运动</p>
            </div>
            <div class="content">
              <img
                src="https://img1.baidu.com/it/u=1188612043,4177562501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375"
                alt="图片暂无法展示"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="WEBSITE">
        <div class="l">
          <div class="cube">
            <div class="topD"></div>
            <div>
              <span style="--i: 0"></span>
              <span style="--i: 1"></span>
              <span style="--i: 2"></span>
              <span style="--i: 3"></span>
            </div>

            <div class="cube2">
              <div>
                <span style="--i: 0"></span>
                <span style="--i: 1"></span>
                <span style="--i: 2"></span>
                <span style="--i: 3"></span>
              </div>

              <div class="cube3">
                <div class="top3"></div>
                <div>
                  <span style="--i: 0"></span>
                  <span style="--i: 1"></span>
                  <span style="--i: 2"></span>
                  <span style="--i: 3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="r">
          本站已经在线运行:&numsp;<span>{{ time.diffInDays }}</span
          >&ensp;天&ensp;<span>{{ time.diffInHours }}</span
          >&ensp;时&ensp;<span>{{ time.diffInMinutes }}</span
          >&ensp;分&ensp;<span>{{ time.diffInSeconds }}</span
          >&ensp;秒
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "author",
  mounted() {},
  created() {
    setInterval(this.TimeCalculation, 1000);
  },
  data() {
    return {
      time: {
        diffInDays: 0,
        diffInHours: 0,
        diffInMinutes: 0,
        diffInSeconds: 0,
      },
    };
  },
  methods: {
    TimeCalculation() {
      const targetDate = new Date("2023-06-08T14:30:37"); // 指定时间
      const currentDate = new Date(); // 当前时间
      const diffInMilliseconds = Math.abs(targetDate - currentDate); // 计算差值(单位为毫秒)
      const date = new Date(diffInMilliseconds); // 创建一个表示指定时间的Date对象
      this.time.diffInDays = Math.floor(date.getTime() / (24 * 60 * 60 * 1000)); // 计算天数差值
      this.time.diffInHours = Math.floor(
        (date.getTime() % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      ); // 计算小时差值
      this.time.diffInMinutes = Math.floor(
        (date.getTime() % (60 * 60 * 1000)) / (60 * 1000)
      ); // 计算分钟差值
      this.time.diffInSeconds = Math.floor(
        (date.getTime() % (60 * 1000)) / 1000
      ); // 计算秒差值
    },
  },
};
</script>

<style lang="less" scoped>
.About_me {
  position: relative;
  height: 100%;
  padding-top: 20px;
  .Say_it_personally {
    margin-top: 20px;
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    padding: 20px;
    word-wrap: break-word;
    border-radius: 10px;
    font-size: 15px;
    .title {
      display: flex;
      h1 {
        margin-left: 5px;
        span {
          color: rgb(34, 183, 132);
        }
      }
    }
    .introduce {
      text-indent: 20px;
      line-height: 1.5;
    }
    ul li {
      list-style-type: disc;
      font-size: 15px;
      color: rgb(34, 183, 132);
      font-family: "Times New Roman", Times, serif;
      margin-left: 2em;
      margin-top: 10px;
    }
    ul li:first-child {
      margin-top: 20px;
    }
    ul li:hover {
      color: #0cc;
    }
  }

  .WEBSITE {
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-radius: 10px;
    .l,
    .r {
      flex: 1;
      height: 100%;
      font-size: 15px;
      font-family: "宋体";
      span {
        color: #ff4655;
      }
    }
    .l {
      .cube {
        position: relative;
        width: 300px;
        height: 300px;
        transform-style: preserve-3d;
        transform: rotateX(-30deg);
        animation: animateD 8s linear infinite;
      }

      @keyframes animateD {
        0% {
          transform: rotateX(-15deg) rotateY(0deg);
        }

        100% {
          transform: rotateX(-15deg) rotateY(-360deg);
        }
      }

      .cube div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
      }

      .cube2 {
        position: relative;
        width: 150px;
        height: 150px;
        transform-style: preserve-3d;
        animation: animateD2 5s ease-out infinite alternate;
      }

      @keyframes animateD2 {
        0% {
          transform: rotateX(0deg) rotateY(0deg);
        }

        100% {
          transform: rotateX(180deg) rotateY(-360deg);
        }
      }

      .cube2 div {
        position: absolute;
        top: 35px;
        left: 0;
        width: 65%;
        height: 65%;
        transform-style: preserve-3d;
      }

      .cube2 div span {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 65%;
        height: 65%;
        background: transparent;
        border: 2px solid #7dff99;
        transform: rotateY(calc(90deg * var(--i))) translateZ(62px);
      }

      .cube3 {
        position: absolute;
        width: 300px;
        height: 300px;
        transform-style: preserve-3d;
        transform: rotateX(-30deg);
        animation: animateD3 1s ease-in-out infinite alternate;
      }

      @keyframes animateD3 {
        0% {
          transform: rotateX(-90deg) rotateY(0deg);
        }

        100% {
          transform: rotateX(90deg) rotateY(45deg);
        }
      }

      .cube3 div {
        position: absolute;
        top: 70px;
        left: 70px;
        width: 15%;
        height: 15%;
        transform-style: preserve-3d;
      }

      .cube3 div span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #7dff99;
        transform: rotateY(calc(90deg * var(--i))) translateZ(14px);
        box-shadow: 0px 0px 7px #7dff99;
      }

      .top3 {
        position: absolute;
        top: 0;
        left: 0;
        background: #7dff99;
        transform: rotateX(90deg) translateZ(14px);
        box-shadow: 0px 0px 10px #7dff99;
      }
    }
  }
  .Be_fond_of {
    width: 100%;
    height: 225px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.5);
    .card-container {
      flex: 1;
      height: 225px;
      position: relative;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }

    .card {
      width: 100%;
      height: 225px;
      border-radius: inherit;
    }

    .card .front-content {
      width: 100%;
      height: 225px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .card .front-content p {
      font-size: 20px;
      font-weight: 700;
      opacity: 1;
      background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .card .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transform: translateY(96%);
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .card:hover .content {
      transform: translateY(0);
    }

    .card:hover .front-content {
      transform: translateY(-30%);
    }

    .card:hover .front-content p {
      opacity: 0;
    }

    .card {
      flex: 1;
      height: auto;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .move {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
