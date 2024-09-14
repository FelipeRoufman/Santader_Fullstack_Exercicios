let listadecoisas = Array()

//tem que definir quando ele é uma array para guardar as finformaçoes
//lembrado que quando eu falo essas categorias do lista de coisas ele nao tem valor zero, pois os valores dele serao (hardwere,fruits,pessoas)
listadecoisas['hardware'] = Array()
listadecoisas['fruits'] = Array()

// tambem pode colocar assim mas tanto faz no final  das contas
listadecoisas['pessoas'] = Array('moto','antonip')

// aqui sao duas posicoes da lista de coisas que eu vou colocar esses elementos
listadecoisas['hardware'][0] = 'otebook'
listadecoisas['hardware'][1] = 'aouse'
listadecoisas['hardware'][2] = 'metalgera'
listadecoisas['hardware'][3] = 'prego'
listadecoisas['fruits'][1] = 'laranja'

// isso vai me dar a posisaoo que eu coloquei no () vai aparecer
// console.log(listadecoisas.indexOf('prego'))

let n = listadecoisas.indexOf('prego')
if( n === -1){
    console.log('elemento nao existe')
} else {
    console.log(`o elemento exisre e ele esta no ${n}`)
}

let listaNumeros = []

listaNumeros[0] = 10
listaNumeros[1] = 20
listaNumeros[2] = 7
listaNumeros[3] = 19
listaNumeros[4] = 46
listaNumeros[5] = 9
listaNumeros[6] = 13

// essa funçao vai ser para organizar os elementos de um array emtretanto o resultado dar
// 10, 13, 19, 20,
// 46,  7,  9
//  se nao colocar uma funçao dentro do sort ele vai considerar o numero da ferente
console.log(listaNumeros.sort((a,b) => a - b))

