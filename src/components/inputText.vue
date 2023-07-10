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
      <button class="btn" @click="submitComments">提交评论</button>
    </div>
  </div>
</template>

<script>
import { CreateComment } from "../api/request";
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
  props: ["CurrentCommentData", "firstLevelOrSecondLevel", "ArticleID"],
  mounted() {},
  methods: {
    async submitComments() {
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
        let createresult = await CreateComment(requestToCreateACommentObject);
        this.nickname = "";
        this.commentText = "";
        this.$emit("listenAndSubmitButton", this.CurrentCommentData.id);
        console.log(createresult);
        return;
      }
      let requestToCreateACommentObject = {
        article_id: this.ArticleID,
        user_nickname: this.nickname || "",
        comment_level: 1,
        content: this.commentText,
      };
      let createresult = await CreateComment(requestToCreateACommentObject);
      this.nickname = "";
      this.commentText = "";
      this.$emit("commentCompletedUpdatingData");

      console.log(createresult);
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
    position: relative;
    vertical-align: bottom;
    textarea {
      max-width: calc(100% - 50px);
      min-width: 500px;
      height: 50px;
      min-height: 80px;
      padding: 20px 0;
      border: none;
      background: transparent;
      border-bottom: 1px solid #6d6c6c;
      color: #a19e9e;
      outline: none;
      box-sizing: border-box;
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
