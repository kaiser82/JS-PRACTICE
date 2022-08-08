const phones = [
    { name: "Xiomi", camera: 20, storage: "64gb", color: "black", price: 45000 },
    { name: "IPhone", camera: 20, storage: "64gb", color: "black", price: 95000 },
    { name: "Samsung", camera: 20, storage: "64gb", color: "silver", price: 65000 },
    { name: "OnePlus", camera: 20, storage: "128gb", color: "black", price: 77000 },
    { name: "Vivo", camera: 20, storage: "64gb", color: "black", price: 40000 }
]

function costlyPhone(arr) {
    let pricy = arr[0];
    const l = arr.length;
    for (let i = 1; i < l; i++) {
        if (arr[i].price > pricy.price) {
            pricy = arr[i];
        }
    }
    return pricy;
}

console.log(costlyPhone(phones));