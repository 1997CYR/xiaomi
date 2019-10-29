//搜索框特效开始
var searchButton = document.querySelector(".searchButton");
var searchRight2 = document.querySelector(".search_right2");
var searchS = document.querySelector(".search_s");
var an = document.querySelector(".an");

searchS.onmouseenter = function () {
    searchS.style.borderColor = "#7A7A7A";
    an.style.borderColor = "#7A7A7A";
};
searchS.onmouseleave = function () {
    searchS.style.borderColor = "#e0e0e0";
    an.style.borderColor = "#e0e0e0";
    searchButton.style.display = "block";
};

searchS.onclick = function () {
    searchS.style.borderColor = "#ff6700";
    an.style.borderColor = "#ff6700";
    searchButton.style.display = "none";
};
//搜索框特效结束

//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

//JS轮播图区域开始
var bannerPicture = document.querySelector(".bannerPicture");
var bannerPictureli = document.querySelectorAll(".bannerPicture li");
var bannerBtn1 = document.querySelector(".bannerBtn1");
var bannerBtn2 = document.querySelector(".bannerBtn2");
var bannerBtn3 = document.querySelectorAll(".bannerBtn3 li");

//设置时间函数，函数时间设置为3000毫秒
let t = window.setInterval(fn,3000);
//定义num为0
var num = 0;
//定义函数fn，fn是轮播图自己动的函数
function fn() {
    num++;
    if (num == bannerPictureli.length) {
        num = 0;
    }
    for (var i = 0; i < bannerPictureli.length; i++) {
        bannerPictureli[i].style.opacity = "0";
        bannerPictureli[i].style.zIndex = "0";
        bannerBtn3[i].style.background = "#5E5E5E";
        bannerBtn3[i].style.borderColor = "#8A8A8A";
    }
    bannerPictureli[num].style.opacity = "1";
    bannerPictureli[num].style.zIndex = "1";
    bannerBtn3[num].style.background = "#FFFFFF";
    bannerBtn3[num].style.borderColor = "#5E5E5E";
};

function fn1() {
    num--;
    if (num == -1) {
        num = bannerPictureli.length-1;
    };
    for (var i = 0; i < bannerPictureli.length; i++) {
        bannerPictureli[i].style.opacity = "0";
        bannerPictureli[i].style.zIndex = "0";
        bannerBtn3[i].style.background = "#5E5E5E";
        bannerBtn3[i].style.borderColor = "#8A8A8A";
    };
    bannerPictureli[num].style.opacity = "1";
    bannerPictureli[num].style.zIndex = "1";
    bannerBtn3[num].style.background = "#FFFFFF";
    bannerBtn3[num].style.borderColor = "#5E5E5E";
};

bannerPicture.onmouseenter = function(){
    window.clearInterval(t);
};
bannerPicture.onmouseleave = function(){
    t = window.setInterval(fn,3000);
};
bannerBtn1.onmouseenter = function () {
    window.clearInterval(t);
};
bannerBtn1.onmouseleave = function(){
    t = window.setInterval(fn,3000);
};
bannerBtn2.onmouseenter = function () {
    window.clearInterval(t);
};
bannerBtn2.onmouseleave = function () {
    t = window.setInterval(fn,3000);
};

bannerBtn1.onclick = function () {
    fn1();
};
bannerBtn2.onclick = function () {
    fn();
};
//小按钮点击事件
for (let i = 0; i < bannerBtn3.length; i++) {
    bannerBtn3[i].onclick = function () {
        for (let j = 0; j < bannerBtn3.length; j++) {
            bannerPictureli[j].style.opacity = "0";
            bannerPictureli[j].style.zIndex = "0";
            bannerBtn3[j].style.background = "#5E5E5E";
            bannerBtn3[j].style.borderColor = "#8A8A8A";
        };
        bannerPictureli[i].style.opacity = "1";
        bannerPictureli[i].style.zIndex = "1";
        bannerBtn3[i].style.background = "#FFFFFF";
        bannerBtn3[i].style.borderColor = "#5E5E5E";
    };
};
//JS轮播图区域结束

//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

//小米商品列表2开始

var miProductBtn2Left = document.querySelector(".miProductBtn2Left");
var miProductBtn2Right = document.querySelector(".miProductBtn2Right");
var miProductBtn2Leftli = document.querySelectorAll(".miProductBtn2Left li");
var miProductBtn2rightli = document.querySelectorAll(".miProductBtn2Right li");
var lunBo1 = document.querySelector(".lunBo1");
var lunBo2 = document.querySelector(".lunBo2");
console.log(miProductBtn2Left,miProductBtn2Right,miProductBtn2Leftli,miProductBtn2rightli);

miProductBtn2Left.onmouseenter = function () {
    miProductBtn2Leftli[0].style.color = "#ff6700";
    miProductBtn2Leftli[1].style.background = "#ff6700";
    miProductBtn2rightli[0].style.color = "#000000";
    miProductBtn2rightli[1].style.background = "";
    lunBo1.style.display = "block";
    lunBo1.style.zIndex = "20";
    lunBo2.style.display = "none";
    lunBo2.style.zIndex = "1";
};
miProductBtn2Right.onmouseenter = function () {
    miProductBtn2rightli[0].style.color = "#ff6700";
    miProductBtn2rightli[1].style.background = "#ff6700";
    miProductBtn2Leftli[0].style.color = "#000000";
    miProductBtn2Leftli[1].style.background = "none";
    lunBo2.style.display = "block";
    lunBo2.style.zIndex = "20";
    lunBo1.style.display = "none";
    lunBo1.style.zIndex = "1";
};

//小米商品列表2结束

//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

//小米商品列表3开始

var miProductBtn3Left = document.querySelector(".miProductBtn3Left");
var miProductBtn3Center = document.querySelector(".miProductBtn3Center");
var miProductBtn3Right = document.querySelector(".miProductBtn3Right");
var miProductBtn3Leftli = document.querySelectorAll(".miProductBtn3Left li");
var miProductBtn3Centerli = document.querySelectorAll(".miProductBtn3Center li");
var miProductBtn3Rightli = document.querySelectorAll(".miProductBtn3Right li");
var lunBo13 = document.querySelector(".lunBo13");
var lunBo23 = document.querySelector(".lunBo23");
var lunBo33 = document.querySelector(".lunBo33");

miProductBtn3Left.onmouseenter = function () {
    miProductBtn3Leftli[0].style.color = "#ff6700";
    miProductBtn3Leftli[1].style.background = "#ff6700";
    miProductBtn3Centerli[0].style.color = "#000000";
    miProductBtn3Centerli[1].style.background = "none";
    miProductBtn3Rightli[0].style.color = "#000000";
    miProductBtn3Rightli[1].style.background = "none";
    lunBo13.style.display = "block";
    lunBo13.style.zIndex = "20";
    lunBo23.style.display = "none";
    lunBo23.style.zIndex = "2";
    lunBo33.style.display = "none";
    lunBo33.style.zIndex = "1"
};
miProductBtn3Center.onmouseenter = function () {
    miProductBtn3Centerli[0].style.color = "#ff6700";
    miProductBtn3Centerli[1].style.background = "#ff6700";
    miProductBtn3Leftli[0].style.color = "#000000";
    miProductBtn3Leftli[1].style.background = "none";
    miProductBtn3Rightli[0].style.color = "#000000";
    miProductBtn3Rightli[1].style.background = "none";
    lunBo23.style.display = "block";
    lunBo23.style.zIndex = "20";
    lunBo13.style.display = "none";
    lunBo13.style.zIndex = "2";
    lunBo33.style.display = "none";
    lunBo33.style.zIndex = "1"
};
miProductBtn3Right.onmouseenter = function () {
    miProductBtn3Rightli[0].style.color = "#ff6700";
    miProductBtn3Rightli[1].style.background = "#ff6700";
    miProductBtn3Leftli[0].style.color = "#000000";
    miProductBtn3Leftli[1].style.background = "none";
    miProductBtn3Centerli[0].style.color = "#000000";
    miProductBtn3Centerli[1].style.background = "none";
    lunBo33.style.display = "block";
    lunBo33.style.zIndex = "20";
    lunBo13.style.display = "none";
    lunBo13.style.zIndex = "2";
    lunBo23.style.display = "none";
    lunBo23.style.zIndex = "1";
};

//小米商品列表3结束

//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

//小米商品列表4开始

var miProductBtn4Left = document.querySelector(".miProductBtn4Left");
var miProductBtn4Right = document.querySelector(".miProductBtn4Right");
var miProductBtn4Leftli = document.querySelectorAll(".miProductBtn4Left li");
var miProductBtn4rightli = document.querySelectorAll(".miProductBtn4Right li");
var lunBo41 = document.querySelector(".lunBo41");
var lunBo42 = document.querySelector(".lunBo42");

miProductBtn4Left.onmouseenter = function () {
    miProductBtn4Leftli[0].style.color = "#ff6700";
    miProductBtn4Leftli[1].style.background = "#ff6700";
    miProductBtn4rightli[0].style.color = "#000000";
    miProductBtn4rightli[1].style.background = "";
    lunBo41.style.display = "block";
    lunBo41.style.zIndex = "20";
    lunBo42.style.display = "none";
    lunBo42.style.zIndex = "1";
};
miProductBtn4Right.onmouseenter = function () {
    miProductBtn4rightli[0].style.color = "#ff6700";
    miProductBtn4rightli[1].style.background = "#ff6700";
    miProductBtn4Leftli[0].style.color = "#000000";
    miProductBtn4Leftli[1].style.background = "none";
    lunBo42.style.display = "block";
    lunBo42.style.zIndex = "20";
    lunBo41.style.display = "none";
    lunBo41.style.zIndex = "1";
};

//小米商品列表4结束

//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

//小米商品列表5开始

var miProductBtn5Left = document.querySelector(".miProductBtn5Left");
var miProductBtn5Center = document.querySelector(".miProductBtn5Center");
var miProductBtn5Right = document.querySelector(".miProductBtn5Right");
var miProductBtn5Leftli = document.querySelectorAll(".miProductBtn5Left li");
var miProductBtn5Centerli = document.querySelectorAll(".miProductBtn5Center li");
var miProductBtn5Rightli = document.querySelectorAll(".miProductBtn5Right li");
var lunBo15 = document.querySelector(".lunBo15");
var lunBo25 = document.querySelector(".lunBo25");
var lunBo35 = document.querySelector(".lunBo35");

miProductBtn5Left.onmouseenter = function () {
    miProductBtn5Leftli[0].style.color = "#ff6700";
    miProductBtn5Leftli[1].style.background = "#ff6700";
    miProductBtn5Centerli[0].style.color = "#000000";
    miProductBtn5Centerli[1].style.background = "none";
    miProductBtn5Rightli[0].style.color = "#000000";
    miProductBtn5Rightli[1].style.background = "none";
    lunBo15.style.display = "block";
    lunBo15.style.zIndex = "20";
    lunBo25.style.display = "none";
    lunBo25.style.zIndex = "2";
    lunBo35.style.display = "none";
    lunBo35.style.zIndex = "1"
};
miProductBtn5Center.onmouseenter = function () {
    miProductBtn5Centerli[0].style.color = "#ff6700";
    miProductBtn5Centerli[1].style.background = "#ff6700";
    miProductBtn5Leftli[0].style.color = "#000000";
    miProductBtn5Leftli[1].style.background = "none";
    miProductBtn5Rightli[0].style.color = "#000000";
    miProductBtn5Rightli[1].style.background = "none";
    lunBo25.style.display = "block";
    lunBo25.style.zIndex = "20";
    lunBo15.style.display = "none";
    lunBo15.style.zIndex = "2";
    lunBo35.style.display = "none";
    lunBo35.style.zIndex = "1"
};
miProductBtn5Right.onmouseenter = function () {
    miProductBtn5Rightli[0].style.color = "#ff6700";
    miProductBtn5Rightli[1].style.background = "#ff6700";
    miProductBtn5Leftli[0].style.color = "#000000";
    miProductBtn5Leftli[1].style.background = "none";
    miProductBtn5Centerli[0].style.color = "#000000";
    miProductBtn5Centerli[1].style.background = "none";
    lunBo35.style.display = "block";
    lunBo35.style.zIndex = "20";
    lunBo15.style.display = "none";
    lunBo15.style.zIndex = "2";
    lunBo25.style.display = "none";
    lunBo25.style.zIndex = "1";
};

//小米商品列表5结束

//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

//小米商品列表6开始

var miProductBtn6Left = document.querySelector(".miProductBtn6Left");
var miProductBtn6Right = document.querySelector(".miProductBtn6Right");
var miProductBtn6Leftli = document.querySelectorAll(".miProductBtn6Left li");
var miProductBtn6rightli = document.querySelectorAll(".miProductBtn6Right li");
var lunBo61 = document.querySelector(".lunBo61");
var lunBo62 = document.querySelector(".lunBo62");

miProductBtn6Left.onmouseenter = function () {
    miProductBtn6Leftli[0].style.color = "#ff6700";
    miProductBtn6Leftli[1].style.background = "#ff6700";
    miProductBtn6rightli[0].style.color = "#000000";
    miProductBtn6rightli[1].style.background = "";
    lunBo61.style.display = "block";
    lunBo61.style.zIndex = "20";
    lunBo62.style.display = "none";
    lunBo62.style.zIndex = "1";
};
miProductBtn6Right.onmouseenter = function () {
    miProductBtn6rightli[0].style.color = "#ff6700";
    miProductBtn6rightli[1].style.background = "#ff6700";
    miProductBtn6Leftli[0].style.color = "#000000";
    miProductBtn6Leftli[1].style.background = "none";
    lunBo62.style.display = "block";
    lunBo62.style.zIndex = "20";
    lunBo61.style.display = "none";
    lunBo61.style.zIndex = "1";
};

//小米商品列表6结束