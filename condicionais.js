console.log(`Trabalhando com condicionais`)
const salvador=`Salvador`
const saoPaulo=`São Paulo`
const riodeJaneiro=`Rio De Janeiro`
const listaDeDestinos=[salvador,saoPaulo,riodeJaneiro]
const idadeComprador=17
const estaAcompanhada=false
let temPassagemComprada=true
console.log(`Destinos possíveis: ${listaDeDestinos}`)
if(idadeComprador>=18){
    listaDeDestinos.splice(1,1)
    console.log(listaDeDestinos)
}
else if(estaAcompanhada==true){
    console.log("Comprador está acompanhado")
    listaDeDestinos.splice(1,1)
}
else{
    console.log("Comprador menor de idade,proibida a venda.")
}
console.log(listaDeDestinos)