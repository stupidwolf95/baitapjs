/**
 * input 
 * chiều dài, chiều rộng hình chữ nhật
 * handle
 * diện tích = chiều dài x chiều rộng
 * chu vi = (dài + rộng)/2
 * output
 * chu vi, diện tích
 */

var tinhDienTich = function(){
    var dai = document.getElementById("chieuDai").value;
    var rong = document.getElementById("chieuRong").value;
    var dienTich = dai*rong
    document.getElementById("dienTich").innerHTML = "Diện tích hình chữ nhật là: " + dienTich
}
var tinhChuVi = function(){
    var dai = parseInt(document.getElementById("chieuDai").value)
    var rong = parseInt(document.getElementById("chieuRong").value)
    var chuVi = (dai+rong)*2
    document.getElementById("chuVi").innerHTML = "Chu Vi hình chữ nhật là: " + chuVi
}