// Business Logic

function beepBoop(input) {
  let bbArray = [];
  for (let i = 0; i <= input; i++) {
    let numbers = i.toString();
    if (numbers.includes(3)) {
      bbArray.push("Won't you be my neighbor?");
    } else if (numbers.includes(2)) {
      bbArray.push("Boop!");
    } else {
    bbArray.push(i);
    }
  }
  return bbArray;
}