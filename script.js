var antall_dekk = 0;
var per_dekk_klikk = 0;
var shop_felg = false;
var shop_wide = false;
var shop_pigg = false;
var shop_thick = false;
function dekk(){
 antall_dekk = antall_dekk + 1 + per_dekk_klikk;

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

function shop(type) {
    if (type === "felg") {
        if (shop_felg) {
            window.alert('You already own this item')
        } else {
            if (antall_dekk >= 100) {
                per_dekk_klikk = per_dekk_klikk + 5
                shop_felg = true
                antall_dekk = antall_dekk - 100
                window.alert('you bought a new sick rims for youre tire!!!')
            } else {
                window.alert('You dont have enough tires')
            }
        }
    }
    if (type === "wide") {
        if (shop_wide) {
            window.alert('You already own this item')
        } else {
            if (antall_dekk >= 300) {
                per_dekk_klikk = per_dekk_klikk + 15
                shop_wide = true
                antall_dekk = antall_dekk - 300
                window.alert('you bought a new wide tire!!')
            } else {
                window.alert('You dont have enough tires')
            }
        }
    }
    if (type === "pigg") {
        if (shop_pigg) {
            window.alert('You already own this item')
        } else {
            if (antall_dekk >= 600) {
                per_dekk_klikk = per_dekk_klikk + 30
                shop_pigg = true
                antall_dekk = antall_dekk - 500
                window.alert('you bought a new pigg tire!!')
            } else {
                window.alert('You dont have enough tires')
            }
        }
    }
    if (type === "thick") {
        if (shop_thick) {
            window.alert('You already own this item')
        } else {
            if (antall_dekk >= 1500) {
                per_dekk_klikk = per_dekk_klikk + 50
                shop_thick = true
                antall_dekk = antall_dekk - 2000
                window.alert('you bought a sick new thick rim!!')
            } else {
                window.alert('You dont have enough tires')
            }
        }
    }
}