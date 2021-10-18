let operador = prompt('qual calculo deseja fazer? responda com: +, -, *, ou /')
const num1 = parseInt(prompt('primeiro numero da operação'))
const num2 = parseInt(prompt('segundo numero da operação'))


const calculo = (operador, num1, num2) => {

    switch(operador){
        case '+':
            return (num1) + (num2)

        case '-':
            return (num1) - (num2) 

        case '*':
            return (num1) * (num2) 

        case '/':
            return (num1) / (num2) 
    }
}

alert(calculo(operador, num1, num2))
    
