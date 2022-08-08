function removeDuplicate(arr) {
    const unique = [];
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        if (unique.includes(arr[i]) === false) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

const myArray = [2, 4, 4, 4, 6, 8, 9, 11, 2, 1, 3, 9, 9, 7];

console.log(removeDuplicate(myArray));