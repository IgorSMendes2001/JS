console.log(`Trabalhando com condicionais`)
const salvador=`Salvador`
const saoPaulo=`São Paulo`
const riodeJaneiro=`Rio de Janeiro`
const listaDeDestinos=[salvador,saoPaulo,riodeJaneiro]
const idadeComprador=18
const estaAcompanhada=false
let temPassagemComprada=true
const destino=`Rio de Janeiro`
console.log(`\n Destinos possíveis: ${listaDeDestinos}`)
const podeComprar = idadeComprador>=18||estaAcompanhada== true
let destinoExiste= false
/* let contador=0
while (contador<3){
   if (listaDeDestinos[contador] == destino){
       console.log("Destino existe")
       destinoExiste=true
       break;
   }
    contador+=1
} */
for(let i=0;i<3;i++){
    if(listaDeDestinos[i]==destino)
        destinoExiste=true
        break
    }
console.log("Destino existe: ",destinoExiste)
if(podeComprar&&destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe tivemos um erro!")
}
