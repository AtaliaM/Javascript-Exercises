const candyStore = {
    candies: [
    {
        name: "mint gum",
        id: "as12f",
        price: 2,
        amount: 2
    },
    {
        name: "twix",
        id: "5hd7y",
        price: 5,
        amount: 4
    },
    ],
    cashRegister: 200
   }

   function getCandy(candyStore, id) {

    for (let i = 0; i < candyStore.candies.length; i++)
    {
        if (candyStore.candies[i].id === id)
        {
            return candyStore.candies[i];
        }
    }

   }

   console.log(getCandy(candyStore, "as12f"));

   function getPrice(candyStore, id){
    for (let i = 0; i < candyStore.candies.length; i++)
    {
        if (candyStore.candies[i].id === id)
        {
            return candyStore.candies[i].price;
        }
    }
} 

console.log(getPrice(candyStore, "5hd7y"));


function addCandy(candyStore, id, name, price){
    candyStore.candies.push({
        name: name,
        id:id,
        price:price,
        amount: 1,
    })
}

addCandy(candyStore, "ayr456", "Mekupelet", 4);
console.log(candyStore.candies[2]);


function buy(candyStore, id){
    for (let i = 0; i < candyStore.candies.length; i++)
    {
        if (candyStore.candies[i].id === id)
        {
            candyStore.candies[i].amount -= 1;
            candyStore.cashRegister += candyStore.candies[i].price;
            break;
        }
    }
}

console.log("before buying mint gum");
console.log(candyStore.cashRegister);
console.log(candyStore.candies[0].amount);

buy(candyStore, "as12f");

console.log("after buying mint gum");
console.log(candyStore.cashRegister);
console.log(candyStore.candies[0].amount);
