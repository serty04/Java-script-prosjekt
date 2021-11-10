var antall_dekk = 0;
var per_dekk_klikk = 1;
function dekk(){
 antall_dekk = antall_dekk + per_dekk_klikk;

 document.getElementById("score").innerHTML = antall_dekk;
 
}
function oppgradering1(){

}
/*fra Zakaria*/
function bigImg(x) {
    x.style.height = "420px";
    x.style.width = "420px";
}
  
function normalImg(x) {
x.style.height = "400px";
x.style.width = "400px";
}