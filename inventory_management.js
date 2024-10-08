// Task 1: Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Lipstick', price: 15, quantity: 50, lowStockLevel: 5 },
    { name: 'Foundation', price: 20, quantity: 70, lowStockLevel: 7 },
    { name: 'Blush', price: 12, quantity: 30, lowStockLevel: 3 },
    { name: 'Eyeshadow', price: 10, quantity: 40, lowStockLevel: 4 },
    { name: 'Concealer', price: 25, quantity: 60, lowStockLevel: 6},

];
//Task 2: Create a Function to Display Product Details
function displayProductDetails(product) {
    let stocklevel;
    if(product.quantity <= product.lowStockLevel)
        {stocklevel = 'Low Stock'}
        else if (product.quantity > product.lowStockLevel)
            {stocklevel = 'In Stock'};  // used if statement to check the stock status of product
}
console.log(`Product: ${product.name}`);
console.log(`Price: $${product.price}`);
console.log(`Quantity that is In Stock: ${product.quantity}`);
console.log(`Stock Status: ${stocklevel}`); // logs product details and stock status


// Task 3: Create a Function to Update Product Stock After Sales
function updateStock (product, unitsSold) {
let leftoverStock = product.quantity - unitsSold;
if (leftoverStock === 0)
    return ( `${product.name} Is out of stock` );
else if (leftoverStock <= product.lowStockLevel)
    return(`${product.name} Has low stock`); // returning low stock or out of stock for a product
}
console.log(updateStock (`Blush`, 2)); // checking with product "Blush"

//Task 4: Create a Function to Check Low Stock Products
function checkLowStock () {
    let currentinventory = inventory.filter (product => product.quantity <= product.lowStockLevel);
    currentinventory.forEach(object => console.log(object.name)); 
}
console.log(checkLowStock);

// Task 5: Create a Function to Calculate Total Inventory Value
function calculateInventoryValue (inventory) {
    let total = inventory.reduce ((i, product) => {
        return i +(product.quantity * product.price)
    },0);
} // reduce method to calculate total value of all products
console.log(`Total value of all products in stock is $${total}`);

//Task 6: Create a Function to Process a Sale

function processSale(x) {
    let productName = inventory.find(object=>object.name===x)
    if (!product.name)
        return (`The product is not in the inventory`);
    else{return updateStock} console.log(`Updated Stock: ${updateStock}`);
} // finds product in inventory, if product is not found displays a message, if it is found then displays the updated stock