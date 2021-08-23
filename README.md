
# _Mr. Roboger's Neighborhood_

#### _A fun little goofabout to return a list of inputted numbers...with just a few unexpected changes!_

#### By _**Melissa Schatz-Miller**_

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_

## Description

_A user can input any number into this application to receive a count from zero up to their number. For fun, the app makes the following number replacements:_

* _All numbers containing a 3 are replaced with the phrase "Won't you be my neighbor?"_
* _All numbers containing a 2, but no 3, are replaced with "Beep!"_
* _All numbers containing a 1, but no 2 or 3, are replaced with "Boop!"_

_Users can replace their number in the input field to get a new count as many times as they'd like._

## Setup/Installation Requirements

* _Clone [this repository](https://github.com/tigertiger/mr-robogers-neighborhood) to an empty folder or to your desktop.  
Instructions for cloning can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)._
* _Navigate to the top level of the roboger directory_
* _Open index.html in your browser_
* _Input a number into the field next to "How High Should We Count?"_
* _Click the "Count!" button_
* _View your fun number list_

## Tests/Specs

```javascript

Describe: beepBoop()
1. Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

2. Test: "It should return the number entered and all preceding numbers as an array"
Code: 
  beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

3. Test: "It should replace any 3s entered with 'Won't you be my neighbor?'"
Code:
  beepBoop(3);
Expected Output: [0, 1, 2, "Won't you be my neighbor?"]

4. Test: "It should replace any 2's entered with 'Boop!'"
Code:
  beepBoop(2);
Expected Output: [0, 1, "Boop!"]

5. Test: "It should replace numbers including 2 and 3 with 'won't you be my neighbor,' NOT 'Boop!'"
Code:
  beepBoop(23);
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!", "Won't you be my neighbor?", 14, 15, 16, 17, 18, 19, "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]

6. Test: "It should replace any 1's entered with 'Beep!'"
Code:
  beepBoop(1);
Expected Output: [0, "Beep!"]

// A friend said tests should be written more like this, if I was understanding correctly. I'm including both versions for now, since I'm not sure:

Describe: beepBoop()
1. Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

2. Test: "It should return the number entered and all preceding numbers as an array"
Code: 
  beepBoop(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

3. Test: "It should replace any 3s entered with 'Won't you be my neighbor?'"
Code:
  beepBoop(3);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

4. Test: "It should replace any 2's entered with 'Boop!'"
Code:
  beepBoop(2);
Expected Output: [0, "Beep!", "Boop!"]

5. Test: "It should replace numbers including 2 and 3 with 'won't you be my neighbor,' NOT 'Boop!'"
Code:
  beepBoop(23);
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!", "Won't you be my neighbor?", 14, 15, 16, 17, 18, 19, "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]

6. Test: "It should replace any 1's entered with 'Beep!'"
Code:
  beepBoop(1);
Expected Output: [0, "Beep!"]

```

## Known Bugs

* _forEach version does not properly replace all digits of 2-digit+ integers including 1, 2, 3_
* _Not quite a "bug," but the count currently displays without spaces between its output items. This will hopefully be fixed someday._

## License

_[GPL](https://opensource.org/licenses/gpl-license)_
_Copyright (c) 2021, Melissa Schatz-Miller_


## Contact Information

Melissa Schatz-Miller <melissa.scmi@gmail.com>

Please feel free to reach out to me with suggested changes/improvements, or if you have any questions.