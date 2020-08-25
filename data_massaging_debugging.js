const data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: [
        {
          meats: ["hamburgers", "sausages"],
          fish: ["salmon", "pike"],
        },
      ],
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: [
        {
          meats: ["hamburgers", "steak", "lamb"],
          fish: ["tuna", "salmon", "barracuda"],
        },
      ],
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: [
        {
          meats: ["ham", "chicken"],
          fish: ["pike"],
        },
      ],
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: [
        {
          meats: ["bird", "rooster"],
          fish: ["salmon"],
        },
      ],
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: [
        {
          meats: ["hamburgers", "lamb"],
          fish: ["anchovies", "tuna"],
        },
      ],
    },
  ];
  
  const names = (arr) => {
    return arr.map((el) => {
      return el.name;
    });
  };
  
  const born = (arr) => {
    return arr.filter((item) => {
      const birthday = new Date(item.birthday).getFullYear();
      if (birthday < 1990) {
        return item;
      }
    });
  };
  
  const food = (arr) => {
    const obj = {};
  
    arr.forEach((el) => {
      el.favoriteFoods.forEach((foodObj) => {
        console.log(foodObj);
        foodObj.meats.forEach((meatItem) => {
          obj[meatItem] = obj[meatItem] + 1 || 1;
        });
        foodObj.fish.forEach((fishItem) => {
          obj[fishItem] = obj[fishItem] + 1 || 1;
        });
      });
    });
    return obj;
  };
  
  console.log(food(data));


//   What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// * Line 75: foodObj.forEach((meatItem) =>
// * You also had an empty console.log() on line 76.

// 2. Which debug method did you use to find the bug?
// * I run the code and checked the line in which I got the error.

// 3. Explain the bug in your own words.
//* I got: TypeError: foodObj.forEach is not a function, so I understood that the way you tried to access
//* the elements in that line was wrong. You didn't specify the collection you wanted to go through - the meats value,
//* which is the list you wanted to get the info from.

// 4. Fix the code and submit it all.
//* Fixed.