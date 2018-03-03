function displayTime() {
    var elf = document.getElementById("clock")
    var now = new Date()
    elf.innerHTML = now.toLocaleDateString()
    setTimeout(displayTime, 1000)
}
window.onload = displayTime
