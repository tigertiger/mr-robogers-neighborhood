// Business Logic

function replacer(num) {
let input = num;
if (input.includes(3)) {
  return true;
} else {
  return false;
}
}
//forEach loop

function beepBoop2(input) {
  const toBeepBoop = input.toString();
  console.log(toBeepBoop);
  let bbArray2 = [];
  Array.from(toBeepBoop).forEach(function(number, index, sourceArr) {
    let ourNumber = parseInt(input);
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, index) => start + (index * step));
    let ourRange = range(0, ourNumber, 1);
    console.log(ourRange, "ourRange");
    let fixerRange = ourRange.toString();
    console.log(fixerRange, "fixerRange")
    if (fixerRange.includes(3)) {
      let fixedRange = fixerRange.replace(3, "Won't you be my neighbor?");
      bbArray2.push(fixedRange);
    } 
  })
  console.log(bbArray2, "bbArray2");
}

// for loop

function beepBoop(input) {
  let bbArray = [];
  for (let index = 0; index <= input; index++) {
    let numbers = index.toString();
    if (numbers.includes(3)) {
      bbArray.push("Won't you be my neighbor?");
    } else if (numbers.includes(2)) {
      bbArray.push("Boop!");
    } else if (numbers.includes(1)) {
      bbArray.push("Beep!");
    } else {
    bbArray.push(index);
    }
  }
  return bbArray;
}





// UI Logic

$(document).ready(function() {
$("#bbCounter").submit(function(event) {
event.preventDefault();
const finalNumber = $("#ourNumber").val();
$("#counterBlock").text(beepBoop(finalNumber));
})


});