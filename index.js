// function myFunction() {
//     var x = document.getElementById("navigation");
//     if (x.style.display == "none") {
//         x.style.display = "flex";
//     } else {
//         x.style.display = "none";
//     }

// }



function myFunction() {
    var x = document.getElementById("navi");
    if (x.style.display == "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }

}




// Our Impact ********************
window.onload = function () {
    var counters = document.getElementsByClassName('statistic-counter');

    function startCounters() {
        for (var i = 0; i < counters.length; i++) {
            var counter = counters[i];
            var endValue = parseInt(counter.innerHTML, 10);
            var startValue = 0;
            var delay = 10;
            var increment = Math.ceil(endValue / (2000 / delay));
            var currentValue = startValue;

            var timer = setInterval(function () {
                currentValue += increment;
                counter.innerHTML = currentValue;
                if (currentValue >= endValue) {
                    clearInterval(timer);
                    counter.innerHTML = endValue;
                }
            }, delay);
        }
    }

    startCounters();
}


// Modal ******************
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src")
        console.log(src)
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();


    }
})