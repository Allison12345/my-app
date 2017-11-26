var names = 'Ada,Edith,Gail,Eva,Bess,Jean,Mandy,Angle,fanny'

function same(names,spliter) {
  var namesArray = names.split(spliter)
  var sameCap = {}
  for (var i = 0; i < namesArray.length; i++) {
    if (sameCap[namesArray[i][0]] === undefined) {
      sameCap[namesArray[i][0]] = [namesArray[i]]
    } else {
      sameCap[namesArray[i][0]].push(namesArray[i])
    }
  }

  return sameCap
}
console.log(same(names,','))
console.log(same('i love you baby',' '))