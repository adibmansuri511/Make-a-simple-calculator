// program for a simple calculator


function calculator() {

    // Take the operator input
    const operator = document.getElementById("operator").value;

    // Take the operand input
    const firstNumber = parseInt(document.getElementById("firstNumber").value);
    const secondNumber = parseInt(document.getElementById("secondNumber").value);


    // Check the three input numbers which is the largest one.

    let result;

    // Using if...else if... else
    if (operator === '+') {
        result = firstNumber + secondNumber;
        result = `${firstNumber} + ${secondNumber} = ${result}`;
    }

    else if (operator === '-') {
        result = firstNumber - secondNumber;
        result = `${firstNumber} - ${secondNumber} = ${result}`;
    }

    else if (operator === '*') {
        result = firstNumber * secondNumber;
        result = `${firstNumber} * ${secondNumber} = ${result}`;
    }

    else if (operator === '/') {
        result = firstNumber / secondNumber;
        result = `${firstNumber} / ${secondNumber} = ${result}`;
    }

    else {
        result = `Enter the valid operator.`
    }

    // Display the result
    console.log(result);
    document.querySelector('#h4').innerHTML = result;
}
