
# _Mr. Roboger's Neighborhood_

#### _A fun little goofabout to return a lit of inputted numbers...with just a few unexpected changes!_

#### By _**Melissa Schatz-Miller**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

* _Clone [this repository](https://github.com/tigertiger/REPONAME) to an empty folder or to your desktop.  
Instructions for cloning can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)._
* _Navigate to the top level of the REPONAME directory_
* _Open index.html in your browser_
* _You can also access the live site at [https://tigertiger.github.io/REPONAME](https://tigertiger.github.io/REPONAME/)_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

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

```

## Known Bugs

* _Any known issues_
* _should go here_

## License

_[GPL](https://opensource.org/licenses/gpl-license)_
_Copyright (c) 2021, Melissa Schatz-Miller_

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

Melissa Schatz-Miller <melissa.scmi@gmail.com>