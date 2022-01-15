const judgeVegetable = function(vegetables, metric){

  //declaring winner variable and biggest number
  let winner ='';
  let biggestNumber = 0;

  //looping through array comparing metrics
  for(let vegetable of vegetables){
    
    //if the metric at index is bigger than the biggest number so far that becomes biggest number and new winner is stored
    if(vegetable[metric]> biggestNumber){
      biggestNumber = vegetable[metric];
      winner = vegetable.submitter;
    }
  }
  //return submitters name
  return winner;
}