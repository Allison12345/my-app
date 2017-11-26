var a = [2, 5, 4, , 4, 6, 2, 0, 99, 4, 66, 34, 67]
var b = [4, 6, 2, 33, 77, 99, 3, 2, 7, 9]
function all(a, b) {
  var tog = []
  for (var i = 0; i < a.length; i++){if (b.indexOf(a[i]) === -1) {
    tog.push(a[i])}
    for (var j = 0; j < b.length; j++) { if (tog.indexOf(b[j]) === -1) {
      tog.push(b[j])}

  
  }
 
  }

  return tog
}
console.log(all(a, b))
