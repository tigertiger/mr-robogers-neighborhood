```javascript

Describe: beepBoop()
Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should return the number entered and all preceding numbers as an array"
Code: 
  beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace any 3s entered with "Won't you be my neighbor?"
Code:
  beepBoop(3);
Expected Output: [0, 1, 2, "Won't you be my neighbor?"]

Test: "It should replace any 2's entered with "Boop!"
Code:
  beepBoop(2);
Expected Output: [0, 1, "Boop!"]