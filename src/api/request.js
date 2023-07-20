import { fetchPost, fetchGet, fetchPatch } from "./index";

// 获取所有文章
export function GETARTICLELIST(data) {
  return fetchGet("/article", data);
}
// 获取文章评论
export function GetCommentData(id) {
  return fetchGet(`/article/comment/${id}`);
}

// 创建评论
export function CreateComment(commentObj) {
  return fetchPost(`/article/comment`, commentObj);
}

// 获取指定文章
export function GetSpecifiedArticles(id) {
  return fetchGet(`/article/${id}`);
}

// 修改文章观看和点赞数
export function UpdateArticleLikesOrViews(id, parameter) {
  return fetchPatch(`/article/${id}`, parameter);
}

// 查询所有动态
export function GetAllUpdates() {
  return fetchGet("/dynamic");
}

// 查询所有留言
export function GetAllMessages() {
  return fetchGet("/message");
}

// 创建留言消息
export function CreateMessage(messageObj) {
  return fetchPost(`/message`, messageObj);
}

// 获取动态评论
export function GetDynamicCommentData(id) {
  return fetchGet(`/dynamic/comment/${id}`);
}

// 创建动态评论
export function CreateDynamicComment(commentObj) {
  return fetchPost(`/dynamic/comment`, commentObj);
}
