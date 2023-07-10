import { fetchPost, fetchGet, fetchPatch } from "./index";

// 获取所有文章
export function GETARTICLELIST() {
  return fetchGet("/article");
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
