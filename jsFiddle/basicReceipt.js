const items = [
  {item: "Lobster", quantity:1, price: 60},
  {item: "Steak Bites", quantity:1, price: 30},
  {item: "House Cocktail", quantity:2, price: 10}
];

function generateReceipt(items) {
let receipt = "";
let grandTotal = 0;
for (let item of items) {
let itemTotal = item.quantity * item.price;
  receipt += `${item.item} - ${item.quantity} x $${item.price} = $${itemTotal}\n`;
  grandTotal += itemTotal;
}
  receipt += `Total: $${grandTotal}`;
  return receipt;
}

console.log(generateReceipt(items));