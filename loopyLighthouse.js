//for loop to count from 100 - 200
for(let counter = 100; counter <= 200; counter++){

  //check if number is only a multiple of 3
  if(counter % 3 === 0 && counter % 4 !== 0){
    console.log("Loopy");
  }
  //check if number is only a multiple of 4
  else if(counter % 3 !== 0 && counter % 4 === 0){
    console.log("Lighthouse");
  }
  //check if number is multiple of both 3 and 4
  else if(counter % 3 === 0 && counter % 4 === 0){
    console.log("LoopyLighthouse");
  }
  //neither the conditions are true
  else{
    console.log(counter);
  }
  
}