//3. Reverter um array

let arr = [1,2,3,4]

let irr = []

for (let i = arr.length - 1; i >= 0; i--){

    irr.push(arr[i]) 
    arr.pop()
}

console.log(irr)
console.log(arr)
