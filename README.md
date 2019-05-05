# JavaScript Objects
> Open index.html in Chrome and open the developer tools to the console. As you complete each step you will see checks in the console telling if you completed the step correctly or not.

1. Open your `script.js` file and create a variable called `me` and set it equal to an empty object like this: 
    ```
    var me = { };
    ```

1. Now that you have created an object let's add to it. Add the keys `firstName`, `lastName`, `age`, `favoriteColor`, and `hasPet`. Set these keys equal to a value that represents yourself! Don't forget to save and refresh the webpage to make sure your work is correct! For example: 
    ```
    var me = {
        firstName: "Sarah",
        lastName: "Betack",
        ...
    }
    ```


1. Create a variable called `myFavoriteColor` and set it equal to the value of `favoriteColor` in the `me` object using dot notation.


1. Without changing the code you used to declare the object as a variable add a new property to your object called `favoriteNashvilleSpots`. The value should be an array. Then `console.log(me)` to make sure your code worked. Here's an example to help you out: 
    ```
    me.favoriteFlowers = ["tulips", "peonies", "sunflowers"]
    ```

1. Create a variable called `fullName` and set it equal to the value of your `firstName` plus the value of your `lastName` (separated by a space).

1. JavaScript objects can also have values that are functions. These are called object methods. Check out this [object method](https://www.w3schools.com/js/js_object_methods.asp) called `fullName` and add a `fullName` object method to your object. 

1. Create another [object method](https://www.w3schools.com/js/js_object_methods.asp) called `myAgeInDogYears` and set it equal to the value of your age divided by 7.

1. Create a variable called `myMostFavoriteNashvilleSpot` and set it equal to the first value of the array `favoriteNashvilleSpots` using dot notation or bracket notation to access the `me` object's value.


1. Copy paste this HUGE object into your `script.js`: 
    ``` 
    var hogwarts = {
        name: 'Hogwarts School of Witchcraft And Wizardry',
        ranking: 38,
        founded: 'c. 9th/10th century',
        owner: "Ministry of Magic",
        location: "Scotland",
        houses: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
        professors: {
            'Minerva McGonagall': {
                subjectsTaught: ['Transfiguration'],
                house: 'Gryffindor'
            },
            'Filius Flitwick': {
                subjectsTaught: ['Charms'],
                house: 'Ravenclaw'
            },
            'Severus Snape': {
                subjectsTaught: ['Defence Against the Dark Arts', 'Potions'],
                house: 'Slytherin'
            }
        },
        schoolGrounds: {
            forbiddenForest: {
                keeper: 'Hagrid',
                openToStudents: false,
                dwellers: ['spiders', 'dragons', 'hippogriff'],
                hasMagicalPowers: true,
            },
            roomOfRequirement: {
                keeper: 'Filch',
                openToStudents: true,
                dwellers: ["Dumbledore's Army", "Draco Malfoy", "Dobby"],
                hasMagicalPowers: true,
            }
        },
    };
    ```

1. Create a variable called `forbiddenForestDwellers` and set it equal to the dwellers in the forbidden forest using dot notation or bracket notation.

1. Create a variable called `snapeFirstSubjectTaught` and set it equal to the 0th index of Severus Snape's first subject taught. *Hint* you may need to use bracket notation (I bet you were beginning to wonder it's purpose ;)!

1. Use object assignment to add a new professor to the list. [Here's a list](https://en.wikipedia.org/wiki/Hogwarts_staff#Filius_Flitwick) to help. *Note* you should not be touching the code that you copied above!

1. Add a new property to our object called `magicalObjects` and set it equal to  
    ```
    {
      'Marauder’s Map': {
        users: ['Harry Potter', 'Ron Weasley', 'Hermione Granger', 'Tom Riddle'],
        creators: ['James Potter', 'Sirius Black', 'Remus Lupin', 'Peter Pettigrew'],
      }
    }
    ```

1. Add an [object method](https://www.w3schools.com/js/js_object_methods.asp) to `Marauders Map` called `sayPassword` that returns the string "I solemnly swear that I am up to no good". Call your object method to make sure it works!
