
const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
        },
    },
   ];

   //1//
  const objNames = data.map(function (person) {
      return person.name;
  });

  console.log(objNames);

  //2//

  function bornBeforeNineties(data) {

    let bornBeforeNinetieslst = [];
    const bornSinceNinties = 631144800750; // Milliseconds since 1.1.1990 00:00:00

      for (let i = 0; i < data.length; i++) {

        if (new Date (data[i].birthday).getTime() < bornSinceNinties)
            {
                bornBeforeNinetieslst.push(data[i]);
            }
      }

      return bornBeforeNinetieslst;
  }

console.log(bornBeforeNineties(data));

//to try use filer insted of map here to avoid the undefined
// const bornBeforeNineties = data.map(function(person) {
    //       const birthday = new Date(person.birthday).getTime();
    //       const bornSinceNinties = 631144800750; // Milliseconds since 1.1.1990 00:00:00
    //       if (birthday < bornSinceNinties)
    //       {
    //         return person;
    //       }
    //   });



//3//
//option 1//

function returnObjFood2(data) {
    const food = {};
    let person = 0;

    while (data[person])
    {
    
        const meatsAndFish = [...data[person].favoriteFoods.meats, ...data[person].favoriteFoods.fish];

        for (let i=0; i < meatsAndFish.length; i++) {
            if(food.hasOwnProperty(meatsAndFish[i])) {
                food[meatsAndFish[i]] +=1;
            }
            else {
                food[meatsAndFish[i]] = 1;
            }
        }

    person++;

    }

    return food;
    
}

console.log(returnObjFood2(data));



//option 2//
const food = {};
const returnObjFood = data.map(function (person) {
    
    //creating one list consisted of the meat and fish together
    const meatsAndFish = [...person.favoriteFoods.meats, ...person.favoriteFoods.fish];

    //checking if the foods on the list are ob the food object, if not - adding them
    for (let i=0; i < meatsAndFish.length; i++) {
        if(food.hasOwnProperty(meatsAndFish[i])) {
            food[meatsAndFish[i]] +=1;
        }
        else {
            food[meatsAndFish[i]] = 1;
        }
    }
 
    
});

// console.log(food);

