var antall_dekk = 0;
var per_dekk_klikk = 1;
var shop_felg = false;
var shop_wide = false;
var shop_pigg = false;
var shop_thick = false;
var shop_duble = false;
var shop_tareng = false;
var shop_pasiv = false;

function dekk(){
 antall_dekk += per_dekk_klikk;

 document.getElementById("score").innerHTML = antall_dekk;
 
}

setInterval(function(){
    document.getElementById("score").innerHTML = antall_dekk;
    //clicks++;
}, 100);

setInterval(function shop(type){
    document.getElementById("score").innerHTML= antall_dekk
    if (type === "pasiv") {
        if (shop_pasiv) {
            window.alert('You already own this item')
        } else {
            if (antall_dekk >= 2000) {
                per_dekk_klikk = per_dekk_klikk + 30
                shop_pasiv = true
                antall_dekk = antall_dekk - 2000
                window.alert('you bought a new sick rims for youre tire!!!')
            } else {
                window.alert('You dont have enough tires')
            }
        }
    }
}, 100);

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
            if (antall_dekk >= 600) {
                per_dekk_klikk = per_dekk_klikk + 15
                shop_wide = true
                antall_dekk = antall_dekk - 600
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
            if (antall_dekk >= 2000) {
                per_dekk_klikk = per_dekk_klikk + 30
                shop_pigg = true
                antall_dekk = antall_dekk - 2000
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
            if (antall_dekk >= 6000) {
                per_dekk_klikk = per_dekk_klikk + 50
                shop_thick = true
                antall_dekk = antall_dekk - 6000
                window.alert('you bought a sick new thick rim!!')
            } else {
                window.alert('You dont have enough tires')
            }
        }
    }
    if (type === "duble") {
        if (shop_duble) {
            window.alert('You already own this item')
        } else {
            if (antall_dekk >=14000) {
                per_dekk_klikk = per_dekk_klikk + 100
                shop_duble = true
                antall_dekk = antall_dekk - 14000
                window.alert('you bought a new sick rims for youre tire!!!')
            } else {
                window.alert('You dont have enough tires')
            }
        }
    }
    if (type === "tareng") {
        if (shop_tareng) {
            window.alert('You already own this item')
        } else {
            if (antall_dekk >= 20000) {
                per_dekk_klikk = per_dekk_klikk + 200
                shop_tareng = true
                antall_dekk = antall_dekk - 20000
                window.alert('you bought a new sick rims for youre tire!!!')
            } else {
                window.alert('You dont have enough tires')
            }
        }
    }
    
}