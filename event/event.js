document.body.onclick = function(){
    if(event.target.tagName == "DIV"){
        alert(event.target.childNodes[0].nodeValue)
    }
}
document.onkeypress = function(){
    console.log(event.keyCode)
}