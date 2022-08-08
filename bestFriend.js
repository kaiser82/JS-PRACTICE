function bestFriend(arr) {
    const l = arr.length;
    let largest = arr[0].length;
    let name = '';
    for (let i = 0; i < l; i++) {
        if (arr[i].length > largest) {
            largest = arr[i].length;
            name = arr[i];
        }
    }
    return name;
}

const myArray = ['Kamal', 'Jamal', 'Rohim', 'Korim', 'Kolim-uddin Khan', 'Hamidur Rahman', 'Nir', 'Samal'];
console.log(bestFriend(myArray));