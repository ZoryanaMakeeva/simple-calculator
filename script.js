calculate(getOperand(), getOperand(), getOperator());

function calculate(operand1, operand2, operator) {
    var calc = {
        '+': function (x, y) {return x + y},
        '-': function (x, y) {return x - y},
        '*': function (x, y) {return x * y},
        '/': function (x, y) {return x / y}
    };
    var result = calc[operator](operand1, operand2);
    document.write("Результат = " + result);
}

function getOperand() {
    var operand = +prompt("Введите число");
    while (isNaN(operand)) {
        operand = +prompt("Введите число");
    }
    return operand;
}

function getOperator() {
    var operator = prompt("Введите знак");
    while (!isOperator(operator)) {
        operator = prompt("Введите знак");
    }
    return operator;
}

function isOperator(operator) {
    var operators = ["+", "-", "*", "/"];
    return operators.indexOf(operator) !== -1;
}
