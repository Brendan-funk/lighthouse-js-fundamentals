const ageCalculator = function (name,yearOfBirth,currentYear){

  //putting curretn age into a variable
  const age = currentYear - yearOfBirth;

  //return string
  return (name + " is " + age + " years old.");
}