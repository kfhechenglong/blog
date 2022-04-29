# 年龄格式化
根据出生日期，获取当前的年龄`*岁*月`或`*天`
```js
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
```