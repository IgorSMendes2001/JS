import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 =new Cliente("Ricardo",111122233309)
const cliente2=new Cliente("Alice",88822233309)
const contaCorrenteRicardo=new ContaCorrente(1001,cliente1)
contaCorrenteRicardo.depositar(600)
const conta2=new ContaCorrente(102,cliente2)
let valor=200
contaCorrenteRicardo.transfeir(valor,conta2)
console.log(contaCorrenteRicardo)
console.log(conta2)
console.log(ContaCorrente.numeroDeContas)



