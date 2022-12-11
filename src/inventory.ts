import {calcAverageProductPrice, Product}from"./products";

interface InventoryItem{
    product: Product,
    quantity: number
}

let inventory : InventoryItem[] = [
{product: {name: "motor", price: 10}, quantity: 10},
{product: {name: "sensor", price: 12.50}, quantity: 4},
{product: {name: "motor", price: 1.00}, quantity: 20}

]
function calcInventoryValue(inventory:InventoryItem[]) : number{
    let sum = 0;
    for(let i = 0; i < inventory.length; i ++){
       if(inventory.length === undefined || inventory.length === 0){
       return sum;
       }else{
        sum += inventory[i].product.price * inventory[i].quantity
       }
    }
    return sum
}
// console.log(calcInventoryValue(inventory))
// console.log(inventory[0].product.name)

export {calcInventoryValue, inventory, InventoryItem}