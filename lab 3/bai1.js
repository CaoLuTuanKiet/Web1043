var toan=prompt("điểm toán");
var ly =prompt("điểm lý");
var hoa=prompt("điểm hóa ");
var sinh=prompt("điểm sinh");

var chucnang = prompt("Vui lòng chọn chức năng");
ly= Number(ly);
toan= Number(toan);
hoa= Number(hoa);
sinh= Number(sinh);
chucnang= Number(chucnang);

switch (chucnang) {
    case 1:
        var diem=(toan+hoa+ly+sinh)/4;
        alert("diem trung binh la"+diem);
        
    case 2:
        var chucnang = prompt("chucnang");
        chucnang= Number(chucnang);
    if ( diem<=10 && diem>=9 ) {
        alert("giỏi");
    } else if  (diem<=9 && diem>=7) {
        alert("Khá");
    }else if(diem<7 && diem>=5){
        alert("Trung bình");
    }else {
        alert("Yếu");
    }
    break;
    case 0:
        alert("thoat chuong trinh");

        break;
}

  

  

