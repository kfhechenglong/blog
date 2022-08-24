// 指针思想实现查找字符串

const str = 'sssss222ssffffuuuuuuuuufsddfssnnnn';
// 现在需要找出str字符串中连续重复最多的字符串

// 设置初始指针位置
let leftPalce = 0;
let rightPlace = 1;
// 重复字符串最多的信息
const repeatInfo = {
    startIndex: '',
    endIndex: '',
    strName: '',
    repeatCount: ''
}
while (leftPalce <= str.length - 1) {
    if (str[leftPalce] !== str[rightPlace]) {
        // 如果左侧指针位置的字符串不等于右侧指针的，则需要移动左侧指针到右侧的位置
        if (repeatInfo.repeatCount < rightPlace - leftPalce) {
            repeatInfo.startIndex = leftPalce + 1;
            repeatInfo.endIndex = rightPlace;
            repeatInfo.strName = str[leftPalce];
            repeatInfo.repeatCount = rightPlace - leftPalce;
        }
        leftPalce = rightPlace;
    }
    // 每次循环都需要改变右侧指针的位置，进行+1
    rightPlace += 1;
}

console.log(repeatInfo)
// 输出结果 { startIndex: 15, endIndex: 23, strName: 'u', repeatCount: 9 }