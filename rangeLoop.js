const range = function(start,end,step){
  
  //checking if the inputs are valid, if not return empty array
  if(step <= 0 || start === null || end === null || step === null || end < start){
    return [];
  }
  else{

    //defining loop variable and array to return
    let arr = [];
    let i = start;

    //looping through the count adding the number to the array each time
    while(i <= end){
      arr.push(i);
      i += step;
    }

    //return array
    return arr;
  }
}
