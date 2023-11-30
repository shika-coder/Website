function ctof() {
    const input = document.getElementById("input_field").value;
    result = (input * 9 / 5) + 32;
    document.getElementById("result").innerHTML = result;
}

function ftoc() {
    const input = document.getElementById("input_field").value;
    result = (input - 32) * 5 / 9;
    document.getElementById("result").innerHTML = result;
}

function changeWebsite() {
    window.location.href = "/html/ctof.html";
}

function changeWebsite2() {
    window.location.href = "/html/ftoc.html";
}