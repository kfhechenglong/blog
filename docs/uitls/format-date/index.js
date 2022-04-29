
 //将日期格式转换为YYYY-MM-DD
 export function dateToggle(data1, year = "-", month = "-", day = "") {
  let date = null;
  if (data1 === undefined) {
    date = new Date();
  } else {
    date = new Date(data1);
  }
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + year + m + month + d + day;
};

// 根据出生年月获取年龄，或根据开始与结束时间获取区段年龄
// beginStr开始时间，endStr结束时间，默认值为当前时间
export function getFormatAge(beginStr, endStr = new Date) {
  if (!beginStr || !endStr) return "";
  const reg = new RegExp(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
  const beginArr = dateToggle(beginStr).match(reg);
  const endArr = dateToggle(endStr).match(reg);
  let days = 0;
  let month = 0;
  let year = 0;
  days = endArr[4] - beginArr[4];
  if (days < 0) {
    month = -1;
    days = 30 + days;
  }
  month = month + (endArr[3] - beginArr[3]);
  if (month < 0) {
    year = -1;
    month = 12 + month;
  }
  year = year + (endArr[1] - beginArr[1]);
  const yearString = year > 0 ? year + "岁" : "";
  const mnthString = month > 0 ? month + "月" : "";
  let dayString = days > 0 ? days + "天" : "";
  let result = "";
  if (year >= 1) {
    result = yearString + mnthString;
  } else {
    if (month >= 1) {
      result = days > 0 ? mnthString + dayString : mnthString;
    } else {
      const begDate = new Date(beginStr);
      const endDate = new Date(endStr);
      const between = (endDate.getTime() - begDate.getTime()) / 1000;
      days = Math.floor(between / (24 * 3600));
      const hours = Math.floor(between / 3600 - days * 24);
      let dayString = days > 0 ? days + "天" : "";
      result = days >= 3 ? dayString : days * 24 + hours + "小时";
    }
  }
  return result;
}
console.log(getFormatAge('2022-1-02', '2022-04-29'))
console.log(getFormatAge('2018-1-25', '2022-04-29'))
console.log(getFormatAge('2022-4-25', '2022-04-29'))
console.log(getFormatAge('2022-4-28', '2022-04-29'))
// 输出
// 3月27天
// 4岁3月
// 4天
// 39小时
console.log(getFormatAge('2022-1-02'))
console.log(getFormatAge('2018-1-25'))
console.log(getFormatAge('2022-4-25'))
console.log(getFormatAge('2022-4-28'))
// 输出
// 3月27天
// 4岁3月
// 4天
// 39小时