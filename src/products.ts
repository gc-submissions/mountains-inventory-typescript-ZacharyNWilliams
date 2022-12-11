interface Product{
name: string,
price: number
}




let products:Product[] = [
    {name: "Playstation", price: 500}, 
    {name:"Xbox", price:400}, 
    {name: "Wii", price:300}];

function calcAverageProductPrice(products:Product[]) : number{
    let sum = 0;
    let length = products.length
    
    for(let i = 0; i < products.length; i ++){
         // array does not exist or is empty
        sum += products[i].price
        
    }


    if(sum > 1){
        sum = sum /products.length
    }
   
    return sum 
}



export{calcAverageProductPrice, Product}