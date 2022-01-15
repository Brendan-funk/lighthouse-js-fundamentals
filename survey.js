const concat = function(arr1, arr2){

  //loop through second array
  for(const value of arr2){
    //add each value to original array
    arr1.push(value);
  }
  //return combined array
  return arr1;
}
