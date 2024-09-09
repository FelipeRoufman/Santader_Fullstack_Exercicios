//5. Contar uma ocorrencias de valores

// lembra de escrever direitinho essa parte e nao esquece de colocar as() no final
const prompt = require('prompt-sync')()

let vet = [10,10,20,30,23]

// tem que declarar qual tipo de variavel vai ser esse prompt
let analise = Number(prompt('Qual numero voce quer verificar que é igual na lista', vet))

// se nao for definido pelomenos um numero para a variavel ele é so uma varialvel qualquer sem valor
let contador = 0

for(let i=0; i < vet.length; i++){

    if(vet[i] === analise){
        contador++
    }
}

console.log(`o valor ${analise} vai se repetir em ${vet} ${contador} vezes`)
