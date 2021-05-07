
var cnt = 0;
var count = document.querySelector('h1');

var inc = document.querySelector(".inc");

var dec = document.querySelector(".dec");



inc.onclick = function () {
cnt++;
count.innerHTML=cnt;

}

dec.onclick = function () {

cnt--;
count.innerHTML=cnt;
}

