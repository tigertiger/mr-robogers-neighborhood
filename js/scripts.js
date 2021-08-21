// Business Logic

//forEach loop

function beepBoop2(input) {
  const toBeepBoop = input.toString();
  console.log(toBeepBoop);
  let bbArray2 = [];
  Array.from(toBeepBoop).forEach(function(number, index, sourceArr) {
    let ourNumber = index.toString();
    console.log(ourNumber + "numberX" + index + sourceArr);
      bbArray2.push(ourNumber)
    
  })
  console.log(bbArray2);
}

// for loop

function beepBoop(input) {
  let bbArray = [];
  for (let i = 0; i <= input; i++) {
    let numbers = i.toString();
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

$(document).ready(function() {
$("#bbCounter").submit(function(event) {
event.preventDefault();
const finalNumber = $("#ourNumber").val();
$("#counterBlock").text(beepBoop(finalNumber));
})


});