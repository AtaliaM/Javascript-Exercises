function calculateCircleArea(radius) {
    let area = Math.PI * (radius ** 2);
    area = area.toFixed(2);

    return area;
}

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(7));

