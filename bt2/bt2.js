/**
 * input
 * nhap vao 5 so thuc
 * handle
 * (a+b+c+d+e)/5
 * output trung binh 5 số
 */
var tinhTb = function(){
    var soThuNhat = parseInt(document.getElementById("soMot").value)
    var soThuHai =  parseInt(document.getElementById("soHai").value)
    var soThuBa = parseInt(document.getElementById("soBa").value)
    var soThuTu = parseInt(document.getElementById("soBon").value)
    var soThuNam = parseInt(document.getElementById("soNam").value)
    var result = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam)/5
    document.getElementById("result").innerHTML = "Kết Quả : " + result
}