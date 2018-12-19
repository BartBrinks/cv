var x = document.getElementById("container");

var it = 0;
var imgarr = [
    "images/hackathon.png", "../hackathon/index.html",
    "images/leerplan.png", "../leerplan/leerplan.html",
    "images/blackjack.png", "../blackjack/bj.html"
]

function imgslid() {
    setInterval(function() {
        it += 2;
        if (it >= imgarr.length) {
            it = 0;
        }
        x.style.backgroundImage = "url(" + imgarr[it] + ")";
        x.addEventListener("click", e => {
            window.open(imgarr[it + 1], "Portfolio", "width=800px, height=600px, margin-left=auto, margin-right=auto, margin-top=auto, margin-bottom=auto");
        })

    }, 4000);
    onScroll();
}
/*
function test(event) {
    var test1 = event.target.tagName;
    var test2 = event.target.id;
    var test3 = event.target.className;
    alert("element: " + test1 + "\nid: " + test2 + "\nclass: " + test3);

}*/

var isInViewport = function(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function onScroll() {
    var h1arr = document.getElementsByClassName("header");
    for (let i = 0; i < h1arr.length; i++) {
        let ele = h1arr[i];
        if (isInViewport(ele)) {
            var element = document.getElementById("a-" + ele.id);
            if (element != null) {
                element.classList.add("active");
            }
        } else {
            var element = document.getElementById("a-" + ele.id);
            if (element != null) {
                element.classList.remove("active");
            }
        }
    }
}

document.addEventListener("scroll", function() {
    onScroll();
});