var list = [
  { name: 'a', age: '12', adress: 'guiyang' },
  { name: 'b', age: '15', adress: 'shenzheng' },
  { name: 'c', age: '10', adress: 'beijing' }
]
var leftDiv = document.getElementById('left')
var rightDiv = document.getElementById('right')
for (var i = 0; i < list.length; i++) {
  var item = list[i]
  var itemDiv = document.createElement('div')
  itemDiv.onclick = createListener(item)
  var itemContent = document.createTextNode(item.name)
  itemDiv.appendChild(itemContent)
  itemDiv.className = 'item'
  leftDiv.appendChild(itemDiv)
}
function createListener(item) {
  return function(e) {
    var children = e.target.parentNode.children
    for (j = 0; j < children.length; j++) {
      var everyitem = children[j]
      everyitem.className = 'item'
    }
    e.target.className = 'item item-selected'
    var detailDiv = createHTML(item)
    while (rightDiv.firstChild) {
      rightDiv.removeChild(rightDiv.firstChild)
    }
    rightDiv.appendChild(detailDiv)
  }
}

function createHTML(item) {
  var html = document.createElement('div')
  for (var key in item) {
    var p = document.createElement('p')
    var content = document.createTextNode(item[key])
    p.appendChild(content)
    html.appendChild(p)
  }
  return html
}
