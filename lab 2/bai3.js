//nhập họ và tên
let hoten = prompt(" nhập vào họ tên");
//nhập giới tinh
let gioitinh = prompt(" nhập vào giới tính");
//trả về vị trí xuất hiện đầu tiên của một giá trị trong mảng
x = hoten.indexOf(" ");
y = hoten.lastIndexOf(" ");

ho =hoten.substring(0,x) ;
tendem = hoten.substring(x,y);
ten = hoten.substring(y,hoten.length);

if (gioitinh=="Nam") tendem = "Văn"
else tendem = "Vẽ"
//in ra màn hình 
document.write(ho);
document.write(tendem);
document.write(ten);