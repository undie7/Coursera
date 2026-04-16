const products = [
  { product: "Laptop", stock: 5 },
  { product: "Phone", stock: 0 },
  { product: "Headphones", stock: 12 }
];

function checkStockLevels(products) {
   for (let item of products) {
       if (item.stock > 0) {
  console.log(`${item.product}: In Stock`);
       }
      else {
  console.log(`${item.product}: Out of Stock`);
      }
   }
}

console.log(checkStockLevels(products));