const finalPosition = function (moves) {

  //declaring array to return
  let final = [0,0];

  //going through array entered
  for(const move of moves){

    //checking which direction specified and updating array to return
    switch(move){
      case 'north':
        final[1]++;
        break;
      case 'south':
        final[1]--;
        break;
      case 'west':
        final[0]--;
        break;
      case 'east':
        final[0]++;
        break;
    }
  }
  return final;
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

console.log(finalPosition(moves));