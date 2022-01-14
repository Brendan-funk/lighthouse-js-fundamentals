const chooseStations = function(stations){
  //declaring array to return
  let validStations = new Array();
  

  //going through array
  for(const station of stations){

    //checking requirments
    if(station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')){

      //pushing the venue to return array if it meets the requirments
      validStations.push(station[0]);
    }
  }
  //returning array
  return validStations;
}
