function sum(a, b) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 3; }
    if (isNaN(a * 1) || isNaN(b * 1)) {
        return '输入类型有误';
    }
    return "结果是" + (a + b);
}
console.log(sum(5));
