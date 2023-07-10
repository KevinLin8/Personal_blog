// 时间格式化 年月日
export function formatTime(timeString) {
  const date = new Date(timeString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}

// 时间格式化 年月日 小时、分钟、秒
export function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const year = dateTime.getFullYear();
  const month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
  const day = ("0" + dateTime.getDate()).slice(-2);
  const hours = ("0" + dateTime.getHours()).slice(-2);
  const minutes = ("0" + dateTime.getMinutes()).slice(-2);
  const seconds = ("0" + dateTime.getSeconds()).slice(-2);
  // 拼接日期时间格式
  const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  return formattedDateTime;
}

// 判断文章类型
export function CheckArticleType(type) {
  let articletype = {
    1: "个人成长系列",
    2: "vue项目总结系列",
    3: "js实战系列",
    4: "Welcome to Xcode系列",
    5: "nest实战系列",
    6: "typescript实战系列",
    7: "js项目架构系列",
    8: "敏捷开发系列",
    9: "新技术学习系列",
    10: "开发工具系列",
    11: "代码格式规范系列",
    12: "安全算法系列",
    13: "算法题解析系列",
    14: "数据结构与算法TS系列",
    15: "数据结构与算法JS系列",
    16: "js原理学习系列",
    17: "css实战系列",
    18: "插件开发系列",
  };
  return articletype[type];
}
