<template>
  <div id="app">
    <header>
      <nav class="warp">
        <ul class="nav_item">
          <li class="Text_style">HOME</li>
          <li class="Text_style">动态</li>
          <li class="Text_style">文章</li>
          <li class="Text_style">专栏</li>
          <li class="Text_style">留言</li>
          <li class="Text_style">关于我</li>
        </ul>
        <div class="group">
          <input required="" type="text" class="input" />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>keyword</label>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style lang="less">
@textcolor: #f55;
header {
  width: 100%;
  height: 50px;
  background-color: #fff;
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
        &:hover {
          color: @textcolor;
        }
      }
    }
    // 输入框
    .group {
      position: relative;
    }

    .input {
      font-size: 16px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 200px;
      border: none;
      border-bottom: 1px solid #515151;
      background: transparent;
    }

    .input:focus {
      outline: none;
    }

    label {
      color: #4e4e4e;
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
      color: #000;
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
      background: #000;
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
  }
}
</style>
