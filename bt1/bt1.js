/**
 * input 
 * số ngày đi làm
 * Handle 
 * số ngày x số tiền 1 ngày (100000)
 * output lương
 * **/

var tinhLuong = function(){
    var soNgayDiLam = document.getElementById("soNgay").value;
    var result = soNgayDiLam*100000
    console.log(result)
    document.getElementById("result").innerHTML = "Lương tháng : " + result
}