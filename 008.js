// para fazer uma funçao

function terreno(largura,altura){
    let area = largura * altura
    return area
}

let largura = 20
let altura = 30

// tem que chamar a variavel aqui fora da funçao porque se nao ela nao existe
let area = terreno(largura,altura)

console.log(`vai ser ${area}`)