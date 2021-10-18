class Veiculo{

    constructor(tipoVeiculo, marca, modelo, ano, codigoDaPlaca, numMultas, velMax){

        this.tipoVeiculo = tipoVeiculo
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.codigoDaPlaca = codigoDaPlaca
        this.numMultas = numMultas
        this.velMax = velMax
    }

    get tipoModelo(){

        return this.pegarModelo()
    }

    pegarModelo(){

        return this.modelo
    }

    adicionaMulta(codigoDaPlaca){

        if(codigoDaPlaca === this.codigoDaPlaca) {
            this.numMultas += 1;// numero de multas é igual a +1, preservando o valor anterior.
        // 2
        }

        return `numero de multas: ${this.numMultas}`
    }

}

const meuCarro = new Veiculo('carro', 'chevrolet', 'x', '2020', 'abc1234', 0, 120)
console.log(meuCarro.adicionaMulta('abd1234'))

