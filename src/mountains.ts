//boolean number string symbol null undefined

let fullName:string = "Zachary W";

interface Mountain{
    name:string,
    height:number
}

let newMountain:Mountain = {
    name: "Kilamanjaro",
    height: 10000
}

let mountains:Mountain[] = [{name: "Kilamanjaro", height: 1229431 }, 
                            {name: "Everest", height: 111129032},
                            {name: "Robber's Roost Peak", height:4468} ];

let numberArray: number[] = [1,3,5,10]

function Calculate(a:number, b:number, type:string) : number {
        return a + b;
}

Calculate(1, 1, "3")


// function findNameOfTallestMountain1(array:Mountain[]) : string {
//     let result:string = '';
//     let newHeight:number = 0;
//     for(let item of array){
//         if(item.height > newHeight){
//             newHeight = item.height;
//             result = item.name;
//         }
//     }
//     return result;
// }
// console.log(findNameOfTallestMountain1(mountains))

function  findNameOfTallestMountain(mountains:Mountain[]) : string {
    
    let max = mountains[0];
    
    for (let i = 0; i < mountains.length; i++) {
        if (mountains[i].height > max.height) {
            max = mountains[i];
        }
    }
    return max.name
}
// console.log( findNameOfTallestMountain(mountains));
export { findNameOfTallestMountain}

// return mountains[1].name