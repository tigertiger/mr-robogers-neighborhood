// Business Logic

function beepBoop(input) {
  let bbArray = [];
  for (let i = 0; i <= input; i++) {
    let numbers = i.toString();
    console.log(numbers);
    if (numbers.includes(3)) {
      bbArray.push("Won't you be my neighbor?");
    } else if (numbers.includes(2)) {
      bbArray.push("Boop!");
    } else if (numbers.includes(1)) {
      bbArray.push("Beep!");
    } else {
    bbArray.push(i);
    }
  }
  return bbArray;
}

// UI Logic

// function showCount(input) {

//   beepBoop(endingNumber);
// }


$(document).ready(function() {
$("#bbCounter").submit(function(event) {
event.preventDefault();
const finalNumber = $("#ourNumber").val();
$("#counterBlock").html(beepBoop(finalNumber));
})
});



// Test

// function beepBoop(input) {
//   let bbArray = [];
//   let numbers = [input.toString()]
//   numbers.forEach(function(number) {
//     if (number.includes(3)) {
//       bbArray.push("Won't you be my neighbor?");
//     } else if (number.includes(2)) {
//       bbArray.push("Boop!");
//     } else if (number.includes(1)) {
//       bbArray.push("Beep!");
//     } else {
//     bbArray.push(number[i]);
//     }
//   })
//   return bbArray;
// }