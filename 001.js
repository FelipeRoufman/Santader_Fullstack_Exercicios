// :1 soma dos elementos de array

console.log("ola mundo")

// aqui eu estou criando uma variavel chamada "sum" e ja vou definir o valor original dela
let sum = 0

// aqui estou criando uma array com os elementos dentro dele lembrando que as posiçoes sao:
//         0  1  2  3
let arr = [10,20,30,40]

// já aqui estou fazendo uma loop de for para somar cada item das posiçioes de 0 a 3
for(let i = 0; i < arr.length; i++){

    console.log(arr[i])
    sum += arr[i]

}

// aqui é somente cospindo o resultado
console.log(sum)