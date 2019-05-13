$(document).ready(function(){
  // Your code goes below
  var me={
    firstName:"Alex",
    lastName:"Miller",
    age:21,
    favoriteColor:"Blue",
    hasPet:false,
    // fullName:this.firstName+" "+this.lastName,
    fullName:function(){
      return this.firstName+" "+this.lastName;
    },
    myAgeInDogYears:function(){
      return this.age*7;
    }

  };

  var myFavoriteColor=me.favoriteColor;
  me.favoriteNashvilleSpots=["12 South","Vandy","Broadway"];
  var myMostFavoriteNashvilleSpot=me.favoriteNashvilleSpots[0];

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

var forbiddenForestDwellers=hogwarts.schoolGrounds.forbiddenForest.dwellers;
var snapeFirstSubjectTaught=hogwarts.professors['Severus Snape'].subjectsTaught[0];
hogwarts.professors[3]="Albus Dumbledore";


hogwarts.magicalObjects={
  'Marauder’s Map': {
    users: ['Harry Potter', 'Ron Weasley', 'Hermione Granger', 'Tom Riddle'],
    creators: ['James Potter', 'Sirius Black', 'Remus Lupin', 'Peter Pettigrew'],
  }
}


hogwarts.magicalObjects["Marauder’s Map"].sayPassword=function(){
  return "I solemnly swear that I am up to no good";
}

console.log(hogwarts.magicalObjects["Marauder’s Map"].sayPassword());

//delete ranking
delete hogwarts.ranking;





























   




























   


















































   




























   











































































   




























   











































































   




























   











































































   




























   






















































































   




























   





























































   




























   





























































   






















  // Are you trying to see the answers? 





   





























































   




























   





























































   














  // You should not look at the answers!














   





























































   



    // Turn back now! 
























   





























































   




























   





























































   





   // Please don't look at the answers! 






















   





























































   




























   




























   




























   




























   




























   




























   


























   // I asked nicely. 




























   




































   // OK fine. Here are the answers. 









    if (typeof me !== 'undefined') {
      console.log("Step 1: Correct");
    } else {
      console.log("Step 1: Incorrect");
    }

   if (typeof me !== 'undefined') {
    var step2Correct = true;
    var keys = ["firstName", "lastName", "age", "favoriteColor", "hasPet"].sort()
    for (var i = 0; i < keys.length; i ++) {
      if (!me.hasOwnProperty(keys[i])) {
        step2Correct = false;
        break;
      }
    }
    if (step2Correct) {
     console.log("Step 2: Correct");
    } else {
     console.log("Step 2: Incorrect");    
    }
   }

   if (typeof myFavoriteColor !== 'undefined') {
    if (myFavoriteColor === me.favoriteColor) {
      console.log("Step 3: Correct");
    } else {
      console.log("Step 3: Incorrect");   
    }
   }

   if (typeof me.favoriteNashvilleSpots !== 'undefined') {
    if (Array.isArray(me.favoriteNashvilleSpots)) {
      console.log("Step 4: Correct");
    } else {
      console.log("Step 4: Incorrect");   
    }
   }

   if (typeof fullName !== 'undefined') {
    if (fullName  === `${me.firstName} ${me.lastName}`) {
      console.log("Step 5: Correct");
    } else {
      console.log("Step 5: Incorrect");   
    }
   }


   if (typeof me.fullName !== 'undefined') {
    if (me.fullName() === `${me.firstName} ${me.lastName}`) {
      console.log("Step 6: Correct");
    } else {
      console.log("Step 6: Incorrect");   
    }
   }

   if (typeof me.myAgeInDogYears !== 'undefined') {
    if (me.myAgeInDogYears() === me.age * 7) {
      console.log("Step 7: Correct");
    } else {
      console.log("Step 7: Incorrect");   
    }
   }
   if (typeof myMostFavoriteNashvilleSpot !== 'undefined') {
    if (myMostFavoriteNashvilleSpot === me.favoriteNashvilleSpots[0]) {
      console.log("Step 8: Correct");
    } else {
      console.log("Step 8: Incorrect");   
    }
   }

   if (typeof hogwarts !== 'undefined') {
    var hogwartsReal = {
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
    if (_.isEqual(hogwarts, hogwartsReal) || Object.keys(hogwarts.professors) > Object.keys(hogwartsReal.professors)) {
        console.log("Step 9: Correct");
      } else {
        console.log("Step 9: Incorrect");   
      }
      if (typeof forbiddenForestDwellers !== 'undefined') {
        if (forbiddenForestDwellers === hogwarts.schoolGrounds.forbiddenForest.dwellers) {
          console.log("Step 10: Correct");
        } else {
          console.log("Step 10: Incorrect");    
        }
      }

      if (typeof snapeFirstSubjectTaught !== 'undefined') {
        if (snapeFirstSubjectTaught === hogwarts.professors['Severus Snape'].subjectsTaught[0]) {
          console.log("Step 11: Correct");
        } else {
          console.log("Step 11: Incorrect");    
        }
      }

      if (typeof hogwarts.professors !== 'undefined' && Object.keys(hogwarts.professors).length !== 3) {
        if (Object.keys(hogwarts.professors).length > 3) {
          console.log("Step 12: Correct");
        } else {
          console.log("Step 12: Incorrect");    
        }
      }


      if (typeof hogwarts.magicalObjects !== 'undefined') {
        var realMapCode = {
          'Marauder’s Map': {
            users: ['Harry Potter', 'Ron Weasley', 'Hermione Granger', 'Tom Riddle'],
            creators: ['James Potter', 'Sirius Black', 'Remus Lupin', 'Peter Pettigrew'],
          }    
        }
        if (_.isEqual(hogwarts.magicalObjects, realMapCode) || (hogwarts.magicalObjects['Marauder’s Map'] && hogwarts.magicalObjects['Marauder’s Map'].sayPassword)) {
            console.log("Step 13: Correct");
        } else {
            console.log("Step 13: Incorrect");    
        }
        if (typeof hogwarts.magicalObjects['Marauder’s Map'].sayPassword !== 'undefined') {
          var returnString = "I solemnly swear that I am up to no good";
          if (hogwarts.magicalObjects['Marauder’s Map'].sayPassword() === returnString){
            console.log("Step 14: Correct");
            if (hogwarts.ranking === undefined) {
                console.log("Step 15: Correct");
            } else {
                console.log("Step 15: Incorrect");    
            }
          } else {
            console.log("Step 14: Incorrect");    
          }
        }
      }

  }
  
});