var list = [
  { name: 'a', age: '12', adress: 'guiyang' },
  { name: 'b', age: '15', adress: 'shenzheng' },
  { name: 'c', age: '10', adress: 'beijing' }
]
var leftDiv = document.getElementById('left')
var rightDiv = document.getElementById('right')
function createListener(item) {
  return function(e) {
    var children = e.target.parentNode.children
    for (j = 0; j < children.length; j++) {
      var everyitem = children[j]
      everyitem.className = 'item'
    }
    e.target.className = 'item item-selected'
    var detailDiv = document.createElement('div')
    var itemDetail = document.createTextNode(JSON.stringify(item))
    detailDiv.appendChild(itemDetail)
    while (rightDiv.firstChild) {
      rightDiv.removeChild(rightDiv.firstChild)
    }
    rightDiv.appendChild(detailDiv)
  }
}
for (var i = 0; i < list.length; i++) {
  var item = list[i]
  var itemDiv = document.createElement('div')
  itemDiv.onclick = createListener(item)
  var itemContent = document.createTextNode(item.name)
  itemDiv.appendChild(itemContent)
  itemDiv.className = 'item'
  leftDiv.appendChild(itemDiv)
}
