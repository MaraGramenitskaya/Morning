let moon = document.getElementById("moonDiv");
let sun = document.getElementById("sunDiv");
let noch = function () {
    sun.style.transition = "10s";
    sun.style.marginTop = "-20px";
    sun.style.backgroundColor = "rgb(214, 200, 45)";
    moon.style.transition = "13s";
    moon.style.marginLeft = "-160px";
    document.body.style.transition = "15s";
    document.body.style.backgroundColor = "#a9bccc";

}

setTimeout(() => {
    noch()
}, 1000
)