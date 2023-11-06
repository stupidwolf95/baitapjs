/**
 * input 
 * nhập số có 2 chữ số
 * handle
 * tìm số hàng đơn vị 
 * tìm số hàng chục
 * tổng 2 kí số
 * output tổng 2 kí số
 */

var tinh = function(){
    var soHangDonVi, soHangChuc ;
    var input = document.getElementById("number").value;
    soHangDonVi = input % 10;
    soHangChuc = Math.floor(input/10); 
    var output = soHangDonVi + soHangChuc;
    document.getElementById("output").innerHTML = "Tổng 2 kí số là: " + output
}