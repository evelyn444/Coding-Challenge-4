// Task 1: Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Lipstick', price: 15, quantity: 50, lowStockLevel: 5 },
    { name: 'Foundation', price: 20, quantity: 70, lowStockLevel: 7 },
    { name: 'Blush', price: 12, quantity: 30, lowStockLevel: 3 },
    { name: 'Eyeshadow', price: 10, quantity: 40, lowStockLevel: 4 },
    { name: 'Concealer', price: 25, quantity: 60, lowStockLevel: 6},

];
//Task 2: Create a Function to Display Product Details
function displayProductDetails() {
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

