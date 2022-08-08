function paperRequirements(b1, b2, b3) {
    const firstPageRequirment = b1 * 100;
    const secondPageRequirment = b2 * 200;
    const thirdPageRequirment = b3 * 300;
    const totalPageRequirment = firstPageRequirment + secondPageRequirment + thirdPageRequirment;
    return totalPageRequirment;
}

console.log(paperRequirements(3, 2, 1));