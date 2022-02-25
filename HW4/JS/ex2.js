const r = Number(prompt("Enter the circle radius:"));

const circle = {
    radius: 0,
    circumference(){
        return 2*Math.PI*(circle.radius)
    },
    area(){
        return Math.PI*(circle.radius)^2
    }
}
circle.radius=r
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
