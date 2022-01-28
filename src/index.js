
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  
 let a = matrix.length
  result = [];
  if(a>0){
    for(i=0; i<a; i++){
  
    if(i % 2 === 0){
    result.push(...matrix[i])
  }else{
    result.push(...matrix[i].reverse())
  }
  
}
return result;
  }else{
    return []
  }

  
}
