//Nhập a,b,c
let a = prompt("Nhập a:");
let b = prompt("Nhập b:");
let c = prompt("Nhập c:");

// Kiểm tra a,b,c có phải là cạnh của 1 tam giác không  
if (a + b > c && a + c > b && b + c > a) {

// Kiểm tra loại tam giác
if (a === b && b === c) {
document.write("Tam giác đều");
} else if (a === b || b === c || c === a) {
document.write("Tam giác cân");
} else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
        Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
        Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)) {
document.write("Tam giác vuông");
} else {
document.write("Tam giác thường");
}
} else {
document.write("Không phải là cạnh của một tam giác");
}