let arr = ["Tue" , "Thu" , "Sat", "Nine"];
    //Loại bỏ phần tử cuối cùng của một mảng
    arr.pop();
    // Thêm các phần tử mảng
    arr.splice(0,0,"Mon");
    arr.splice(2,0,"We");
    arr.splice(4,0,"Fri");
    //thêm 1 mục mới vào cuối mảng
    arr.push("Sun");
    //in mảng ra màn hình
    document.write(arr)