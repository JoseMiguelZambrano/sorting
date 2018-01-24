function bubbleSort(array){
  if(array.length === 0){
    return array;
  }else{
    for(var j = 0;j < array.length; j++){
      swap(array);
    }  
    return array;
  }
}
function swap(array){
  for(var i = 0; i < array.length; i++){
    if(array[i+1] < array[i]){
      var aux = array[i];
      array[i] = array[i+1];
      array[i+1] = aux;
    }
  }
}

function split(wholeArray) {
  var firstHalf = [];
  var secondHalf = [];
  var redondeo = Math.floor(wholeArray.length/2);
  firstHalf = wholeArray.slice(0,redondeo);
  secondHalf = wholeArray.slice(redondeo,wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(firstArr,secondArr){
  var finalArray = firstArr.concat(secondArr);
  return bubbleSort(finalArray);
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  var half1, half2;
  array = split(array);
  half1 = mergeSort(array[0]);
  half2 = mergeSort(array[1]);
  return merge(half1, half2);
}