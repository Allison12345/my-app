var button = document.getElementById("button")
var username = document.getElementById("username")
var password = document.getElementById("password")
var count = 0
button.onclick = function (e) {

    if (count === 3) {
        return alert("stop")
    }
    if (username.value === "") {
        return alert("please write username")
    } else {
        console.log(username.value)
    }
    if (password.value === "") {
        count++
        alert("please write password")
    } else {
        console.log(password.value)
    }
}