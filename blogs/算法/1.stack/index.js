// 栈

// 试编写"智能重复" smartRepeat函数，实现：
// - 将 3[abc] 变为abcabcabc
// - 将 3[2[a]2[b]] 变为aabbaabbaabb
// - 将2[10[a]3[b]2[1[c]5[d]]] 变为aaaaaaaaaabbbcdddddcdddddaaaaaaaaaabbbcdddddcddddd
// - 以此类推......


// 思路分析

// 遍历每一个字符
// - 利用识别[]结合栈创建层级关系
// - 创建两个栈，一个保存数字，一个保存字符串
// - 如果字符是数字标识，则将数字压入数字栈
// - 如果字符是 [ ,则将空字符串压单词栈
// - 如果字符是字母，则将单词栈栈顶拼接上这个字母
// - 如果字符是 ] ,则数字栈和单词栈都出栈，再整合数字和单词。如果栈中还有元素，将整合的字符串拼接到栈顶，没有则完成执行返回结果



function  smartRepeat (templateStr) {
    let rest = templateStr;
    let index  = 0; // 指针
    let stackNum = []; // 存放数字的栈
    let stackStr = []; // 存放字符串的栈
    if (templateStr != undefined) {
        while( index < templateStr.length ) {
            // 获取剩余部分的字符串
            rest = templateStr.substring(index)
            // 判断字符串是否是以"数字+["开头
            if (/^\d+\[/.test(rest)) {
                const num = rest.match(/^(\d+)\[/)[1];
                // 将数字存放在数字栈中
                stackNum.push(parseInt(num));
                // 同时将在字符串栈中存放一个空的字符占位
                stackStr.push("");
                // 指针下标位移，位移长度为存放数字位数+1
                index += num.toString().length + 1
            } else if (/^\w+\]/.test(rest)) {
                // 判断是否为字符串
                // 获取字符串
                const str = rest.match(/^(\w+)\]/)[1];
                // 将字符串压入栈顶
                stackStr[stackStr.length - 1] = str;
                index += str.length;
            } else if (rest[0] === ']') {
                // 如果当前的指针指向是“]”，则需要将stackStr和stackNum内容出栈，
                const str = stackStr.pop();
                const num = stackNum.pop();
                if (stackStr.length === 0) {
                    return str.repeat(num);
                }
                // 重叠字符串
                stackStr[stackStr.length - 1] += str.repeat(num);
                index++;
            }
        }
    }
};

const templateString = "2[10[a]3[b]2[1[c]5[d]]]";
const res = smartRepeat(templateString);

console.log(res)