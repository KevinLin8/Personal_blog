<template>
  <div id="app">
    <header>
      <nav class="warp">
        <ul class="nav_item">
          <li
            :class="$route.path == '/' ? 'active Text_style' : 'Text_style'"
            @click="$router.push('/')"
          >
            HOME
          </li>
          <li
            :class="
              $route.path == '/dynamic' ? 'active Text_style' : 'Text_style'
            "
            @click="$router.push('/dynamic')"
          >
            动态
          </li>
          <li
            :class="
              $route.path == '/article' ? 'active Text_style' : 'Text_style'
            "
            @click="$router.push('/article')"
          >
            文章
          </li>
          <li
            :class="
              $route.path == '/special' ? 'active Text_style' : 'Text_style'
            "
            @click="$router.push('/special')"
          >
            专栏
          </li>
          <li
            :class="
              $route.path == '/message' ? 'active Text_style' : 'Text_style'
            "
            @click="$router.push('/message')"
          >
            留言
          </li>
          <li
            :class="
              $route.path == '/author' ? 'active Text_style' : 'Text_style'
            "
            @click="$router.push('/author')"
          >
            关于我
          </li>
        </ul>
        <div class="group">
          <input required="" type="text" class="input" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>请输入内容</label>
        </div>
      </nav>
    </header>
    <vue-particles
      class="lizi-bg"
      color="#0cc"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="star"
      :particleSize="3"
      linesColor="#0cc"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="5"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <router-view />
  </div>
</template>
<!-- #39AFFD #8DD1FE-->
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      loader: true,
    };
  },
  mounted() {
    setTimeout(() => (this.loader = false), 3000);
  },
};
</script>
<style lang="less">
.lizi-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  //   pointer-events: none;
}
#app {
  width: 100%;
  height: 100vh;
}
.active {
  color: #0cc !important;
}
@textcolor: #968e8e;
header {
  width: 100%;
  height: 50px;
  background-color: rgb(33, 33, 33);
  nav {
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      li {
        margin-right: 20px;
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        &:hover {
          color: #0cc;
          border-bottom: 1px solid #0cc;
        }
      }
    }
    // 输入框style
    .group {
      position: relative;
    }

    .input {
      font-size: 13px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 200px;
      border: none;
      border-bottom: 1px solid #515151;
      background: transparent;
      color: @textcolor;
    }

    .input:focus {
      outline: none;
    }

    label {
      color: @textcolor;
      font-size: 12px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    .input:focus ~ label,
    .input:valid ~ label {
      top: -25px;
      font-size: 14px;
      color: @textcolor;
    }

    .bar {
      position: relative;
      display: block;
      width: 200px;
    }

    .bar:before,
    .bar:after {
      content: "";
      height: 1px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: #968e8e;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    .bar:before {
      left: 50%;
    }

    .bar:after {
      right: 50%;
    }

    .input:focus ~ .bar:before,
    .input:focus ~ .bar:after {
      width: 50%;
    }

    .highlight {
      position: absolute;
      height: 60%;
      width: 100px;
      top: 25%;
      left: 0;
      pointer-events: none;
      opacity: 0.5;
    }

    .input:focus ~ .highlight {
      animation: inputHighlighter 0.3s ease;
    }

    @keyframes inputHighlighter {
      from {
        background: #5264ae;
      }

      to {
        width: 0;
        background: transparent;
      }
    }
    // 输入框style end
  }
}
</style>
