<template>
  <div class="commentCom">
    <h2 class="allcomment">全部评论:</h2>
    <InputText
      firstLevelOrSecondLevel="1"
      :ArticleID="ArticleID"
      @commentCompletedUpdatingData="commentCompletedUpdatingData"
    />
    <div
      class="Period"
      v-for="(item, index) in formattedCommentData"
      :key="index"
    >
      <div class="user_container">
        <div class="user">
          <div class="icon">
            <i class="iconfont icon-touxiang_avatar"></i>
          </div>
          <div class="nickname">
            <p class="name">{{ item.user_nickname }}</p>
            <p class="signature">
              发布于: {{ formatDateTime(item.create_time) }}
            </p>
          </div>
        </div>
        <div
          class="recover"
          @click="temporarilyTextBox(formattedCommentData, item, index)"
        >
          回复
        </div>
      </div>
      <p class="content">{{ item.content }}</p>
      <InputText
        v-if="item.istemporarilyTextBox"
        :CurrentCommentData="replyToCurrentCommentData"
        @listenAndSubmitButton="updateistemporarilyTextBox"
        firstLevelOrSecondLevel="2"
      />
      <template v-if="item.subsetComments.length">
        <div
          class="subsetComments"
          v-for="(sub, idx) in item.subsetComments"
          :key="idx"
        >
          <div class="user_container">
            <div class="user">
              <div class="icon">
                <i class="iconfont icon-touxiang_avatar"></i>
              </div>
              <div class="nickname">
                <p class="name">
                  {{ sub.user_nickname
                  }}<span v-if="sub.reply_comment_id"
                    ><span class="replyToInstructions">回复:</span>@{{
                      obtainUserNickname(sub.reply_comment_id)
                    }}</span
                  >
                </p>
                <p class="signature">
                  发布于: {{ formatDateTime(sub.create_time) }}
                </p>
              </div>
            </div>
            <div
              class="recover"
              @click="temporarilyTextBox(item.subsetComments, sub, idx)"
            >
              回复
            </div>
          </div>
          <p class="content">{{ sub.content }}</p>
          <InputText
            v-if="sub.istemporarilyTextBox"
            :CurrentCommentData="replyToCurrentCommentData"
            @listenAndSubmitButton="updateistemporarilyTextBox"
            firstLevelOrSecondLevel="2"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import InputText from "./inputText.vue";
import { formatDateTime } from "../tool/index";
import { GetCommentData } from "../api/request";
export default {
  computed: {},
  data() {
    return {
      // 评论数据最终渲染数组
      formattedCommentData: [],
      // 请求的评论数据
      CommentList: [],
      // 当前操作的评论
      replyToCurrentCommentData: null,
    };
  },
  components: {
    InputText,
  },
  props: ["ArticleID"],
  mounted() {},
  async created() {
    this.getCommentData();
  },
  methods: {
    // 格式化时间
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
    // 获取评论数据
    async getCommentData() {
      let commentdata = await GetCommentData(this.ArticleID);
      this.CommentList = commentdata.data;
      this.formattedCommentData = [];
      this.formatCommentDataStructureFn(this.CommentList);
    },
    // 回复的点击事件：评论框的展示与隐藏
    temporarilyTextBox(arr, comment, idx) {
      comment.istemporarilyTextBox = !comment.istemporarilyTextBox;
      this.$forceUpdate(arr, idx, comment);
      this.replyToCurrentCommentData = comment;
    },
    // 格式化评论数据
    formatCommentDataStructureFn(data) {
      if (Array.isArray(data)) {
        data.forEach((comment) => {
          if (comment.comment_level == 1) {
            comment.subsetComments = [];
            comment.subsetComments.push(
              ...data.filter((item) => {
                return (
                  item.comment_level == 2 &&
                  item.parent_comment_id == comment.id
                );
              })
            );
            this.formattedCommentData.push(comment);
          }
        });
      }
    },
    // 通过评论ID找到被回复的用户username
    obtainUserNickname(id) {
      if (Array.isArray(this.CommentList)) {
        let gettarget = this.CommentList.find((commit) => {
          return commit.id == id;
        });
        return gettarget.user_nickname;
      } else {
        return "数据错误";
      }
    },
    // 评论框组件提交后关闭输入框
    updateistemporarilyTextBox(commentID) {
      this.formattedCommentData.forEach((comment) => {
        if (comment.id == commentID) {
          comment.istemporarilyTextBox = !comment.istemporarilyTextBox;
          this.$forceUpdate();
        } else {
          if (comment.subsetComments.length) {
            comment.subsetComments.forEach((sub) => {
              if (sub.id == commentID) {
                sub.istemporarilyTextBox = !sub.istemporarilyTextBox;
              }
            });
          }
        }
      });
    },
    // 评论完成更新数据
    commentCompletedUpdatingData() {
      console.log("评论完成了，需要更新数据");
      this.getCommentData();
    },
  },
};
</script>

<style lang="less" scoped>
.commentCom {
  width: 100%;
  height: auto;
  margin-top: 20px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 15px 5px;
}
.allcomment {
  color: rgb(28, 136, 99);
  font-size: 15px;
  font-family: "Times New Roman", Times, serif;
  font-weight: 900;
  border-left: 3px solid #20b985;
  padding-left: 10px;
}
.Period {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px 0;
  .user_container:hover .recover {
    opacity: 1;
  }
  .user_container {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user {
      width: auto;
      height: 300px;
      display: flex;
      align-items: center;
      .icon {
        margin-right: 5px;
        color: #474545;
      }
      .nickname {
        font-size: 12px;
        font-family: "Times New Roman", Times, serif;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 35px;
        .name {
          color: rgb(28, 136, 99);
          .replyToInstructions {
            color: #6d6c6c;
            margin: 0 5px;
          }
        }
        .signature {
          color: #818080;
        }
      }
    }
    .recover {
      width: 35px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      cursor: pointer;
      font-size: 12px;
      color: #cec6c6;
      background-color: rgba(34, 183, 132, 0.5);
      opacity: 0;
    }
  }
  .content {
    color: #cec6c6;
    font-size: 14px;
    font-family: "Times New Roman", Times, serif;
    text-indent: 35px;
    height: auto;
    margin-top: 10px;
    border-bottom: 1px solid rgba(34, 183, 132, 0.1);
    padding-bottom: 10px;
  }
}
.subsetComments {
  width: 100%;
  height: auto;
  padding-left: 4em;
  box-sizing: border-box;
  margin-top: 20px;
}

/* === removing default button style ===*/
.inputcontainer {
  background-color: #000;
}
</style>
