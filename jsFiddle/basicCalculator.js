const sales = [
  {item: "Water bottle", quantity:5, price: 1},
  {item: "Headband", quantity:10, price: 2},
  {item: "Granola Bar", quantity:20, price: 3}
];

function calculateTotalSales(transactions) {
let total = 0;
for (let sale of transactions) {
  total += sale.quantity * sale.price;
}
  return total;
}

console.log("Total Sales:$", calculateTotalSales(sales));