import { Cliente } from "./Cliente.js"

export class ContaCorrente{
    agencia
    _cliente
    _saldo=0//# é um atributo privado que não permite acesar ou modificar o item destacado,
            //porém é apenas uma sugestão que ainda não se tornou convenção da linguagem,a convenção atual diz para utilizar o _;
   
   
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor

        }
    }
    get cliente(){
        return this._cliente
    }

    
    get saldo(){
        return this._saldo
    }

    sacar(valor){
        if(this._saldo >=valor){
            this._saldo-=valor
            return valor 
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
    transfeir(valor,conta){
        const valorSacado=this.sacar(valor)
        conta.depositar(valorSacado)
    }
}