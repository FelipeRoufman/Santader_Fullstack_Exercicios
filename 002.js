// ;2 encontre o maior numero de uma array

// aqui eu vou criar uma array de 4 valores 
let arr = [10,20,30,40]

//  aqui eu vou comparar com o primeiro e depois vou comparando o resto
let big = arr[0]

for (let i = 0; i< arr.length; i++){

    // ator de comparaçao 
    if(arr[i] > big){

        big = arr[i]
    }
}

// aqui eu só cospi o valor mas dessa vez lembrei que da para colocar multiplos tipos de valores em um console.log
console.log( "o maior numero do array é",big)