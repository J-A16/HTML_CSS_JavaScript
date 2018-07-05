let firstNumber = 0;
let operator;
let operatorSet = false;
let justAttemptedToCalculate = false;
let justPressedEqualSign = false;

function backspace() {

    str = document.querySelector('.display').innerText;

    if (!isNaN(str) && str.length > 1) {
        document.querySelector('.display').innerText = str.substring(0, str.length - 1);
    }

    if (!isNaN(str) && str.length === 1) {
        document.querySelector('.display').innerText = 0;
    }
}

function resetCalculator() {
    firstNumber = 0;
    operator;
    operatorSet = false;
    document.querySelector('.display').innerText = 0;
}

function setOperator(buttonText) {
    if (justPressedEqualSign) {
        operatorSet = false;
        justPressedEqualSign = false;
    }

    attemptToCalculate();

    displayText = document.querySelector('.display').innerText;
    if (!isNaN(displayText)) {
        firstNumber = parseFloat(displayText);
    }

    operator = buttonText;
    document.querySelector('.display').innerText = buttonText;
    operatorSet = true;

}

function attemptToCalculate() {
    displayText = document.querySelector('.display').innerText;
    if (operatorSet && !isNaN(displayText)) {
        switch (operator) {
            case "/":
                document.querySelector('.display').innerText = firstNumber / parseFloat(displayText);
                break;
            case "*":
                document.querySelector('.display').innerText = firstNumber * parseFloat(displayText);
                break;
            case "-":
                document.querySelector('.display').innerText = firstNumber - parseFloat(displayText);
                break;
            case "+":
                document.querySelector('.display').innerText = firstNumber + parseFloat(displayText);
                break;
        }
    }

    justAttemptedToCalculate = true;
}

function sendNumberToDisplay(num) {
    displayText = document.querySelector('.display').innerText;

    if (justAttemptedToCalculate || displayText === "0") {
        document.querySelector('.display').innerText = num;
        if (justPressedEqualSign) {
            operatorSet = false;
            justPressedEqualSign = false;
        }
    } else {
        document.querySelector('.display').innerText += num;
    }

    justAttemptedToCalculate = false;
}

document.querySelector('.calculator').addEventListener('click', function (event) {
    if (event.target.tagName === "BUTTON") {
        buttonText = event.target.innerText;
        if (!isNaN(buttonText)) {
            sendNumberToDisplay(buttonText);
        } else {
            switch (buttonText) {
                case "<--":
                    backspace();
                    break;
                case "C":
                    resetCalculator();
                    break;
                case "=":
                    justPressedEqualSign = true;
                    attemptToCalculate();
                    break;
                default:
                    setOperator(buttonText);
            }

        }
    }
});