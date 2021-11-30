class Cliente{
    nome
    cpf
    
}
class ContaCorrente{
    agencia
    _saldo=0//# é um atributo privado que não permite acesar ou modificar o item destacado,
            //porém é apenas uma sugestão que ainda não se tornou convenção da linguagem,a convenção atual diz para utilizar o _;

    sacar(valor){
        if(this._saldo >=valor){
            this._saldo-=valor
        }else{
            console.log("Não é possível fazer esta transação")
        }
    }
    
    depositar(valor){
        if(valor>0){
            this._saldo+=valor
        }else{
            console.log("Não é possível fazer esta transação")
        }
    }
}

const cliente1 =new Cliente()
cliente1.nome="Ricardo"
cliente1.cpf=111122233309


const cliente2=new Cliente()
cliente2.nome="Alice"
cliente2.cpf=88899900021

const contaCorrenteRicardo=new ContaCorrente()
contaCorrenteRicardo.agencia=1001

contaCorrenteRicardo.depositar(1000)
contaCorrenteRicardo.depositar(220)

const valorSacado=contaCorrenteRicardo.sacar(50)

console.log(contaCorrenteRicardo)
