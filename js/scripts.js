
//Front end calculations
$(document).ready(function() {
  $("#triangleSideLengths").submit(function(event) {
    event.preventDefault();
    var sideOne  = parseInt($("#sideOne").val());
    var sideTwo  = parseInt($("#sideTwo").val());
    var sideThree  = parseInt($("#sideThree").val());
    // debugger;
    if ((sideOne > sideTwo + sideThree) || (sideTwo > sideOne + sideThree) || (sideThree > sideOne + sideTwo)) {
      $("#formOutput").text("NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.");
      // debugger;
    } else if ((sideOne === sideTwo) && (sideTwo === sideThree)) {
      $("#formOutput").text("Equilateral: All sides are equal.");
      // debugger;
    } else if ((sideOne === sideTwo) || (sideTwo === sideThree) || (sideOne === sideThree)) {
      $("#formOutput").text("Isosceles: Exactly 2 sides are equal.");
      // debugger;
    } else if ((sideOne !== sideTwo) && (sideTwo !== sideThree)) {
      $("#formOutput").text("Scalene: No sides are equal.");
    }
  });
})
