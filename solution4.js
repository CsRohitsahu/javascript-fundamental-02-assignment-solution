const products=[
    {name:"Laptop",price:120000 },
    {name:"Mobile",price:70000 },
    {name:"Laptop Bag",price:20000 },
    {name:"Watch",price:20000 },
    {name:"Mobile Charger",price:1500 },
];

const maxPrice=products.reduce((max ,item)=>max.price>item.price?max:item)
const minPrice=products.reduce((min ,item)=>min.price<item.price?min:item)
console.log("The product with maximum price is ",maxPrice.name,"which price is",maxPrice.price);
console.log("The product with minimum price is ",minPrice.name,"which price is",minPrice.price);
