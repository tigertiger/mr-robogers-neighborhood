```javascript

Describe: beepBoop()
Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should return the number entered and all preceding numbers as an array"
Code: 
  beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace any 3s entered with 'Won't you be my neighbor?'"
Code:
  beepBoop(3);
Expected Output: [0, 1, 2, "Won't you be my neighbor?"]

Test: "It should replace any 2's entered with 'Boop!'"
Code:
  beepBoop(2);
Expected Output: [0, 1, "Boop!"]

Test: "It should replace numbers including 2 and 3 with 'won't you be my neighbor,' NOT 'Boop!'"
Code:
  beepBoop(23);
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!", "Won't you be my neighbor?", 14, 15, 16, 17, 18, 19, "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]

Test: "It should replace any 1's entered with 'Beep!'"
Code:
  beepBoop(1);
Expected Output: [0, "Beep!"]