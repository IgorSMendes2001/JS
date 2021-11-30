console.log("Conversão de tipos")
console.log("ano",+2021)
console.log(parseInt("2")+parseInt("2"))
//utilizamos do parseInt para transformar uma string em valor numérico inteiro.
console.log("10"/"2")
//diferentemente da soma na subtração, divisão e multiplicação há uma conversão implícita das strings
console.log("3"*"5")
console.log("15"-"3")
const nome = "Igor"
const sobrenome="Mendes"
// console.log(nome + " "+sobrenome)
console.log(nome, sobrenome)
console.log(`Meu nome é ${nome} e meu sobrenome é  ${sobrenome}`)
let contador=0
contador= contador+1
console.log(contador)
console.log(`Trabalhando com listas`)
const salvador=`Salvador`
const saoPaulo=`São Paulo`
const riodeJaneiro=`Rio De Janeiro`
const listaDeDestinos=[salvador,saoPaulo,riodeJaneiro]
listaDeDestinos.push(`Belo Horizonte`)//Serve para acrescentar algum item num array dinamicamente
console.log(`Destinos possíveis: ${listaDeDestinos}`)
listaDeDestinos.splice(3,1)//Serve para deletar um elemento do array de acordo com a posição descrita
console.log(listaDeDestinos[2])

