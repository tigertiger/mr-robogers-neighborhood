// Business Logic

// foEach loop [not fully functional]

function beepBoop2(input) {
  let bbArray2 = [];
  let input2 = input.toString();
  Array.from(input2).forEach(function(number, index) {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, index) => start + (index * step));
    let ourRange = range(0, input, 1);
    console.log(ourRange, "ourRange");
    if (ourRange.toString().includes(3) || ourRange.toString().includes(2) || ourRange.toString().includes(1)) {
      let newRange = (ourRange.toString()).replace(/.3+/g, "Won't you be my neighbor?").replace(/.2+/g, "Boop!").replace(/\b.1\d*\b/g, "Beep!").replace(/1/g, "Beep!");
      bbArray2.push(newRange);
    } else {
      bbArray2.push(ourRange);
    }
    console.log(bbArray2);
  })
  return bbArray2;
}

//for loop [fully functional]

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

$("#bbEach").submit(function(event) {
  event.preventDefault();
  const finalNumber2 = $("#ourNewNumber").val();
  $("#eachCountBlock").text(beepBoop2(finalNumber2));
})
});