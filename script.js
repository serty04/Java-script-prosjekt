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
function load(type) {
    if (type === "shop") {
        document.getElementById("innhold").innerHTML = "<div id='shop'><h1>Item shop</h1><div id='items_shop'><div class='shop_item_div'><div class='shop_item' id='shop_item00'><img id='rims_img' src='https://www.pngall.com/wp-content/uploads/2/Alloy-Wheel-PNG-Picture.png' onclick='rims()'></div><div class='shop_item' id='shop_item01'><img id='wide_img' src='https://i0.wp.com/timelessmuscle.com/wp-content/uploads/2017/07/15_inch_12.png?ssl=1' onclick='wide()'></div><div class='shop_item' id='shop_item02'><img id='pigg_img' src='https://www.dekkgutta.no/uploads/1/2/3/5/123531798/published/piggdekk_2.png?1544526341' onclick='pigg()'></div></div><div class='shop_item_div'><div class='shop_item' id='shop_item03'><img id='rim_size_png' src='https://cdn.discounttire.com/sys-master/images/hc2/h9a/8812915884062/EDUwheel-size_width.png' onclick='rim_size()'></div><div class='shop_item'><p>no item</p></div><div class='shop_item'><p>no item</p></div></div><div class='shop_item_div'><div class='shop_item'><p>no item</p></div><div class='shop_item'><p>no item</p></div><div class='shop_item'><p>no item</p></div></div></div></div><div id='info'><h1>Bruker</h1><p id='mon'></p><p id='mon_click'></p><p id='mon_sec'></p></div>"
        reload()
    }
    if (type === "game") {
        document.getElementById("innhold").innerHTML = "<div id='innhold'><div id='hoved-side'><h1 id='header1'>You have</h1><h1 id='score'>0</h1><div id='tire'></div><div id='index-img'><img onclick='dekk()' onmouseover='bigImg(this)' onmouseout='normalImg(this)' src='dekk.png' alt=''></div></div>"
        reload()
    }
    if(type === "news"){
        document.getElementById("innhold").innerHTML = " <div id='tekstbox1'><H1 id='news_header1'>Features being added</H1><br><br><h4></h4></div><div id='tekstbox2'><h1 id='news_header2'>Welcome</h1><br><br><h4 id=news_h4'>Welcome to tire clicker. This is a game about colecting as many tires as posible. Enjoy yourself!!.</h4></div>"
        reload()
    }
}
