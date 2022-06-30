function sum(a = 2, b = 3): string {

    if (isNaN(a * 1) || isNaN(b * 1)) {
        return '输入类型有误'
    }
    return "结果是" + (a + b)
    
}

console.log(sum(5));
 