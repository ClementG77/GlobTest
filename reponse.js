const foo = (intervals) => {
    if (intervals.length < 2) return intervals;
    
    const array = intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let previous = array[0];
    for (let i = 1; i < array.length; i ++) {
        if (previous[1] >= array[i][0]) {
            previous = [previous[0], Math.max(previous[1], array[i][1])];
        } else {
            result.push(previous);
            previous = array[i];
        }
    }
    result.push(previous);
    return result;
};


const test1 = [[0, 3], [6, 10]];
const test2 = [[0, 5], [3, 10]];
const test3 = [[0, 5], [2, 4]];
const test4 = [[7, 8], [3, 6], [2, 4]];
const test5 = [[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]];

console.log(foo(test1));
console.log(foo(test2));
console.log(foo(test3));
console.log(foo(test4));
console.log(foo(test5));