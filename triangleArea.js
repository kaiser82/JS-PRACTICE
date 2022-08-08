function triangleArea(a, b, c) {
    const s = (a + b + c) / 2
    const cal = s * (s - a) * (s - b) * (s - c);
    console.log(cal);
    let area = Math.sqrt(cal);
    area = parseFloat(area.toFixed(2));
    return area;
}

const x = 3;
const y = 6;
const z = 7;

console.log("Area of the Triangle:", triangleArea(x, y, z));
