function box(btn) {
    var x = btn.value;
    if (x === "X") { x = "*" }
    var d = document.getElementById("display")
    var c = document.getElementById("calc")
    d.value = d.value + x;
    btn.style.opacity = "0.5";
    window.setTimeout(function() {
        btn.style.opacity = "1"
    }, 100)
}

function evalfunc() {
    var d = document.getElementById("display");
    var x = d.value;
    var y = eval(x);
    d.value = y;
}

function clearbox(btn) {
    var d = document.getElementById("calc");
    var n = null;
    d.display.value = n;
    btn.style.opacity = "0.5";
    window.setTimeout(function() {
        btn.style.opacity = "1"
    }, 100)
}


