<template>
  <div class="textinput">
    <p class="reply" v-if="firstLevelOrSecondLevel == '2'">
      回复:<span>@{{ CurrentCommentData.user_nickname || "" }}</span>
    </p>
    <div class="form__group field">
      <input
        type="input"
        class="form__field"
        placeholder="Nickname"
        required=""
        v-model="nickname"
      />
      <label for="name" class="form__label">Name</label>
    </div>
    <div class="commentTextframe">
      <textarea
        class="comment"
        required=""
        type="text"
        :placeholder="placeholder"
        v-model="commentText"
      />
      <button class="btn" @click="submitComments">
        {{ parentComponentName == "message" ? "提交留言" : "提交评论" }}
      </button>
    </div>
  </div>
</template>

<script>
import {
  CreateComment,
  CreateMessage,
  CreateDynamicComment,
} from "../api/request";
import { Notification } from "element-ui";
export default {
  data() {
    return {
      nickname: "",
      commentText: "",
      placeholder:
        this.firstLevelOrSecondLevel == "1"
          ? "说点什么吧..."
          : "善语结善缘，恶语伤人心",
    };
  },
  props: [
    "CurrentCommentData",
    "firstLevelOrSecondLevel",
    "ArticleID",
    "parentComponentName",
    "dynamic_id",
  ],
  mounted() {},
  methods: {
    async submitComments() {
      if (!this.nickname && !this.commentText) {
        Notification({
          title: "ERROR",
          message: "您没有输入昵称或评论",
          type: "error",
        });
        return;
      }
      if (this.firstLevelOrSecondLevel == "2") {
        let reply_comment_id = 0;
        if (this.CurrentCommentData.comment_level == 2) {
          reply_comment_id = this.CurrentCommentData.id;
        }
        let requestToCreateACommentObject = {
          article_id: this.CurrentCommentData.article_id,
          user_nickname: this.nickname || "",
          parent_comment_id:
            this.CurrentCommentData.parent_comment_id ||
            this.CurrentCommentData.id,
          reply_comment_id,
          comment_level: 2,
          content: this.commentText,
        };
        if (this.parentComponentName == "detail") {
          let createresult = await CreateComment(requestToCreateACommentObject);
          if (createresult.data.errcode == 0) {
            this.nickname = "";
            this.commentText = "";
            this.$emit("listenAndSubmitButton", this.CurrentCommentData.id);

            return;
          } else {
            throw new Error("创建文章评论失败");
          }
        } else if (this.parentComponentName == "message") {
          delete requestToCreateACommentObject.article_id;
          let createresult = await CreateMessage(requestToCreateACommentObject);
          if (createresult.data.errcode == 0) {
            this.nickname = "";
            this.commentText = "";
            this.$emit("listenAndSubmitButton", this.CurrentCommentData.id);
            return;
          } else {
            throw new Error("创建留言评论失败");
          }
        } else if (this.parentComponentName == "dynamic") {
          delete requestToCreateACommentObject.article_id;
          requestToCreateACommentObject.dynamic_id =
            this.CurrentCommentData.dynamic_id;
          let createresult = await CreateDynamicComment(
            requestToCreateACommentObject
          );
          if (createresult.data.errcode == 0) {
            this.nickname = "";
            this.commentText = "";
            this.$emit("listenAndSubmitButton", this.CurrentCommentData.id);
            return;
          } else {
            throw new Error("创建留言评论失败");
          }
        }
      } else if (this.firstLevelOrSecondLevel == "1") {
        let requestToCreateACommentObject = {
          article_id: this.ArticleID,
          user_nickname: this.nickname || "",
          comment_level: 1,
          content: this.commentText,
        };
        if (this.parentComponentName == "detail") {
          let createresult = await CreateComment(requestToCreateACommentObject);
          if (createresult.data.errcode == 0) {
            Notification({
              title: "成功",
              message: "提交评论成功",
              type: "success",
            });
            this.nickname = "";
            this.commentText = "";
            this.$emit(
              "monitoringAndSubmittingCommentEventsTriggerDataUpdates"
            );
          }
        } else if (this.parentComponentName == "message") {
          delete requestToCreateACommentObject.article_id;
          let createresult = await CreateMessage(requestToCreateACommentObject);
          if (createresult.data.errcode == 0) {
            Notification({
              title: "成功",
              message: "您的留言已提交给博主审核中...",
              type: "success",
            });
            this.nickname = "";
            this.commentText = "";
          }
        } else if (this.parentComponentName == "dynamic") {
          delete requestToCreateACommentObject.article_id;
          requestToCreateACommentObject.dynamic_id = this.dynamic_id;
          let createresult = await CreateDynamicComment(
            requestToCreateACommentObject
          );
          if (createresult.data.errcode == 0) {
            Notification({
              title: "成功",
              message: "提交评论成功",
              type: "success",
            });
            this.nickname = "";
            this.commentText = "";
            this.$emit(
              "monitoringAndSubmittingCommentEventsTriggerDataUpdates"
            );
          }
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.textinput {
  width: 100%;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  .reply {
    font-size: 12px;
    color: #6d6c6c;
    padding-bottom: 10px;
    span {
      color: rgb(34, 183, 132);
    }
  }
  // 昵称框
  .form__group {
    position: relative;
    padding: 20px 0 0;
    width: 100%;
    max-width: 180px;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 1px solid #6d6c6c;
    outline: 0;
    font-size: 13px;
    color: rgb(34, 183, 132);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 13px;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 13px;
    color: #6d6c6c;
    pointer-events: none;
  }

  .form__field:focus {
    padding-bottom: 1px;
    border-width: 1px;
    border-color: rgb(34, 183, 132);
    animation: shake_541 0.14s 3;
  }

  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 13px;
    color: rgb(34, 183, 132);
    font-weight: 700;
  }

  /* reset input */
  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }

  // 评论框
  .commentTextframe {
    width: 100%;
    height: auto;
    max-height: 50px;
    position: relative;
    vertical-align: bottom;
    textarea {
      max-width: calc(100% - 50px);
      min-width: 500px;
      height: auto;
      min-height: 30px;
      padding: 10px 0;
      border: none;
      background: transparent;
      border-bottom: 1px solid #6d6c6c;
      color: #a19e9e;
      outline: none;
      &:focus {
        border-bottom: 1px solid rgb(34, 183, 132);
        animation: shake_541 0.14s 3;
      }
    }

    textarea:valid {
      border-color: #45feaf;
      animation: none;
    }
  }
  @keyframes shake_541 {
    0%,
    100% {
      translate: 0;
    }

    25% {
      translate: 8px 0;
    }

    75% {
      translate: -8px 0;
    }
  }
  // 提交按钮

  .btn {
    position: absolute;
    right: 0;
    bottom: 0;
    float: right;
    font-size: 13px;
    padding: 5px 5px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 2px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(14, 14, 26);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    margin-right: 100px;
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgb(20, 130, 110) 0%,
      rgb(34, 183, 132) 60%
    );
    color: rgb(4, 4, 38);
  }
}
</style>
