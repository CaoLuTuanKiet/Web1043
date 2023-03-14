//nhập a,b,c vào
let a = prompt("Nhập a");
let a1 = parseInt(a);
let b = prompt("Nhập b");
let b1 = parseInt(b);
let c = prompt("Nhập c");
let c1 = parseInt(c);
// sử dụng câu lệnh đk 
if (a == 0) {
if (b == 0) {
if (c == 0) {
  //in ra màn hình
  document.write("phuong trinh vo so nghiem");
} else {
  document.write("phuong trinh vo nghiem");
}
} else {
let x = -c / b;
document.write("phuong trinh co nghiem duy nhat la " + x);
}
} else {
let delta = b * b - 4 * a * c;
if (delta < 0) {
document.write("phuong trinh vo nghiem");
} else if (delta == 0) {
let x = -b / (2 * a);
} else {
let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);

document.write(
  "phuong trinh co 2 nghiem la " + x1.toFixed(2) + " " + x2.toFixed(2)
);
}
}
