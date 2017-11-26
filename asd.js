var a = [2, 5, 4, 7, 9, 4, 6, 2, 0, 99, 4, 66, 34, 67]
var b = [4, 6, 2, 33, 77, 99, 3, 2, 7, 5, 9]
function all(a, b) {
  var taa = []
  for (var i = 0; i < a.length; i++) {
    if ((b.indexOf(a[i]) !== -1 && (taa.indexOf(a[i]) === -1))) {
    
        taa.push(a[i])
      
    }
  }
  return taa
}

console.log(all(a, b))
