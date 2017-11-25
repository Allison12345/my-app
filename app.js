var names ="Ada,Edith,Gail,Eva,Bess,Jean,Mandy,Angle,fanny"
var namesArray = names.split(",")
console.log(namesArray)
function same(){
    var sameCap = {}
    for(var i = 0;i < namesArray.length;i++){
      if(sameCap[namesArray[i][0]] === undefined){
        sameCap[namesArray[i][0]] = [namesArray[i]]
      }else{
        sameCap[namesArray[i][0]].push(namesArray[i])
      }
      
    }
    
    return sameCap
}
console.log(same())