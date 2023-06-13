<template>
  <div class="article_container">
    <img
      src="https://file03.16sucai.com/2017/1100/16sucai_p564c027_0f1.JPG"
      alt=""
    />
    <div class="content">
      <div class="content_text">
        <h3 class="title">如何应对Chrome 112版本中的getDisplayMedia问题？</h3>
        <p class="description">
          前几天chrome发布了112版本，原本可以通过getDisplayMedia正确的获取当前标签页的内容，在此版本中却出现了内容挤压、概率性出现滚动条问题。经过一番思考后，我想到了两个处理方案，本文就跟大家分享下我的思路，欢迎各位感兴趣的开发者阅读本文。
        </p>
      </div>
      <ul class="related">
        <li>创建时间:2023-05-15&nbsp;</li>
        /
        <li>&nbsp;<i class="iconfont icon-chakan2"></i>&nbsp;55&nbsp;</li>
        /
        <li>&nbsp;<i class="iconfont icon-pinglun"></i>&nbsp;5&nbsp;</li>
        /
        <li>&nbsp;<i class="iconfont icon-dianzan"></i>&nbsp;24</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
  img {
    width: 200px;
    height: 100%;
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
