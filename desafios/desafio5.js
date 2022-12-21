function calculator(operand) {
    return function(firstNumber, SecondNumber) {
        let result;
        switch(operand){
            case "+" :
                result = firstNumber + SecondNumber;
            break;
            case "-" :
                result = firstNumber - SecondNumber;
            break;
            case "*" :
                result = firstNumber * SecondNumber;
            break;
            case "/" :
                result = firstNumber / SecondNumber;
            break;
            case "%" :
                result = firstNumber % SecondNumber;
            break;
            default : "Operação inválida.";
        }
        return "Resultado da operação: " + firstNumber + " "+ operand + " " + SecondNumber + " = " + result + "."
    }
};
let sum = calculator("+");
let subtraction = calculator("-");
let multiplication = calculator("*");
let division = calculator("/");
let mod = calculator("%");

console.log(sum(5,10))
console.log(subtraction(5,10))
console.log(multiplication(5,10))
console.log(division(5,10))
console.log(mod(5,10))
