const numero = prompt('digite um numero')

const ehPar = (numero) => {

    if(numero % 2 == 0){

        return 'é par'

    }else if(numero % 2 !== 0){

        return 'é impar'

    }

}

alert(ehPar(numero))