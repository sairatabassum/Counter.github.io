
var cnt = 0;
var count = document.querySelector('h1');

var start = document.querySelector(".start");

var stop = document.querySelector(".stop");

var reset = document.querySelector(".reset");

var Environment;


start.onclick = function () {

    clearInterval(Environment);
    Environment = setInterval(startCount, 300);

}

stop.onclick = function () {

    clearInterval(Environment);

}

reset.onclick = function () {
    clearInterval(Environment);
    count.innerHTML = 0;
    cnt = 0;
}


function startCount() {

    cnt++;
    count.innerHTML = cnt;

}

