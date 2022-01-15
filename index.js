const lastIndexOf = function(arr,value){

  //declaring index variable to return
  let index = -1;

  //looping through array
  for(let i = 0; i < arr.length; i++){

    //if the number matches value given
    if(arr[i] === value){

      //change the index variable to the new index
      index = i;
    }
  }
  //return the index value
  return index;
}
