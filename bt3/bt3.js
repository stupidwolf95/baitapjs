/**
 * input 
 * số tiền $ cần đổi 
 * handle
 * số tiền x giá mỗi $(23500)
 * output
 * số tiền đổi được
 * 
 */
var tinhTien = function(){
    var soDoLa = document.getElementById("soTien").value;
    var result = soDoLa*23500
    document.getElementById("result").innerHTML = "Số tiền đổi được : " + result
}