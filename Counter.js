
var count = document.querySelector('h1');

var inc = document.querySelector(".inc");

var dec = document.querySelector(".dec");

var res =  document.querySelector(".res");

count.innerHTML = localStorage.clickcount;



inc.onclick = function () {


    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        }
        else {
            localStorage.clickcount = 1;
        }
        count.innerHTML = localStorage.clickcount;
    }
    else {
        alert("Your browser does not support web storage");

    }
}

dec.onclick = function () {

    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) - 1;

        }
        else {
            localStorage.clickcount = -1;
        }
        count.innerHTML = localStorage.clickcount;
    }
    else {
        alert("Your browser does not support web storage");

    }
}

res.onclick = function(){

    localStorage.clear();
    count.innerHTML = 0;


}