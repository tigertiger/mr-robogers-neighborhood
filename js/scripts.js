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
      let fixedRange = fixerRange.replaceAll(3, "Won't you be my neighbor?");
      bbArray2.push(fixedRange);
    } else if (fixerRange.includes(2) && fixerRange.includes(3)) {
      let fixedRange2 = fixedRange.replaceAll(3, "Won't you be neighbor?").replace(2, "Boop!");
      bbArray2.push(fixedRange2);
    }
  })
  console.log(bbArray2, "bbArray2");
}
function replacer(bits)
for (let index = 0; index <= bits; index++) {
  let replaceable = index.toString();
  if (replaceable.includes(3)) {
    bbArray.push("Won't you be my neighbor?");
  } else if (replaceable.includes(2)) {
    bbArray.push("Boop!");
  } else if (replaceable.includes(1)) {
    bbArray.push("Beep!");
  } else {
  bbArray.push(index);
  }
}

// functional copy
// function beepBoop2(input) {
//   const toBeepBoop = input.toString();
//   console.log(toBeepBoop);
//   let bbArray2 = [];
//   Array.from(toBeepBoop).forEach(function(number, index, sourceArr) {
//     let ourNumber = parseInt(input);
//     const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, index) => start + (index * step));
//     let ourRange = range(0, ourNumber, 1);
//     console.log(ourRange, "ourRange");
//     let fixerRange = ourRange.toString();
//     console.log(fixerRange, "fixerRange")
//     if (fixerRange.includes(3)) {
//       let fixedRange = fixerRange.replace(3, "Won't you be my neighbor?");
//       bbArray2.push(fixedRange);
//     } else if (fixerRange.includes(2)) {
//       let fixedRange2 = fixedRange.replace(2, "Boop!");
//       bbArray2.push(fixedRange2);
//     }
//   })
//   console.log(bbArray2, "bbArray2");
// }

// for loop
function beepBoop3(input) {
  let input2 = input.toString();
  Array.from(input2).forEach(function(number, index) {

  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, index) => start + (index * step));
  let ourRange = range(0, input, 1);
  console.log(ourRange, "ourRange");
  let bbArray = [];
    if (ourRange.toString().includes(3)) {
      bbArray.push((ourRange.toString()).replaceAll(3, "Won't you be my neighbor?"));
    } else if (ourRange.toString().includes(2)) {
      bbArray.push((ourRange.toString()).replaceAll(2, "Boop!").replaceAll(3, "Won't you be my neighbor?"));
    } else if (ourRange.toString().includes(1)) {
      bbArray.push((ourRange.toString()).replaceAll(1, "Beep!"));
    } else {
    bbArray.push(ourRange);
    }
    console.log('a['+index+')='+number)
    console.log(bbArray);
})
}




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