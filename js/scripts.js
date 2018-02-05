$(document).ready(function() {
  //Backend logic

  function isScalene(side1Input, side2Input, side3Input) {
    // debugger;
    if (side1Input !== side2Input && side2Input !== side3Input) {
      return true;
    } else {
      return false;
    }
  }

  function isEquilateral(side1Input, side2Input, side3Input) {
    if (side1Input === side2Input && side2Input === side3Input) {
      return true;
    } else {
      return false;
    }
  }

  function isIsosceles(side1Input, side2Input, side3Input) {
    if ((side1Input === side2Input) || (side2Input === side3Input) || (side1Input === side3Input)) {
      return true;
    } else {
      return false;
    }
  }

  function isNotTriangle(input1, input2, input3) {
    if ((input1 > input2 + input3) || (input2 > input1 + input3) || (input3 > input1 + input2)) {
      return true;
    } else {
      return false;
    }
  }

  //Front end calculations
  $("#triangleSideLengths").submit(function(event) {
    var sideOneInput = parseInt($("#sideOne").val());
    var sideTwoInput = parseInt($("#sideTwo").val());
    var sideTwoInput = parseInt($("#sideTwo").val());
    var sideThreeInput = parseInt($("#sideThree").val());

    event.preventDefault();
    if (isNotTriangle(sideOneInput, sideTwoInput, sideThreeInput)) {
      $("#formOutput").text("NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.");
    } else if (isEquilateral(sideOneInput, sideTwoInput, sideThreeInput)) {
      $("#formOutput").text("Equilateral: All sides are equal.");
    } else if (isIsosceles(sideOneInput, sideTwoInput, sideThreeInput)) {
      $("#formOutput").text("Isosceles: Exactly 2 sides are equal.");
    } else if (isScalene(sideOneInput, sideTwoInput, sideThreeInput)) {
      $("#formOutput").text("Scalene: No sides are equal.");
    } else {
      console.log("else");
    }
  });
});
