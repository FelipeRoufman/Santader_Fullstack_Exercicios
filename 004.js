// 4. Crie um novo array contendo apenas os numeros pares

//basicamente deixa necessario o prompt-sync para rodar 
const prompt = require ('prompt-sync')();

//isso da ao usuario uma array separada para ele
let usuario = []

//aqui vai ser eu pedindo para o usuario colocar a quantidade de informaçoes que ele vai colocar na array
// esse parseInt transforma o que seria uma string em number, pois o  prompt normal ia só pegar a string
let quantidade = parseInt(prompt("Quantos numeros voce quer verificar: "))

// aqui o usuario vai colocar os numeros que ele vai usar na analise
for( let i = 0; i < quantidade; i++){

    // aqui eu encontrei um problema, para ele identificar esses ${i + 1} tinha que ser entre crases
    let numero = prompt(`Digite o elemento ${i + 1}: `)
    usuario.push(numero)
}

console.log("os numeros que serao analizados são:",usuario)

let funcional = []

for(let i = 0; i < usuario.length; i++){
    if(usuario[i] %2 === 0){
        funcional.push(usuario[i])
    }
}

console.log(`os numeros que serao pares ${funcional}`)