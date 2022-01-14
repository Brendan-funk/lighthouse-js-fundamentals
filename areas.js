const calculateRectangleArea = function (length, width){

  //checking if length and width are positive
  if(length >= 0 && width >= 0){
    let areaRectangle = length * width;
    return areaRectangle;
  }
  
}
const calculateTriangleArea = function (base, height){

  //checking if base and height are positive
  if(base >= 0 && height >= 0){
    let areaTriangle = (base * height) / 2;
    return areaTriangle;
  }
}
const calculateCircleArea = function (radius){

  //checking if radius is positive
  if(radius >= 0){
    let areaCircle = Math.PI * (radius * radius);
    return areaCircle;
  }
}
