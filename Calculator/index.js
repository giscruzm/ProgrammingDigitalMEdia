const txtop1 = document.getElementById("op1");
const txtoperator = document.getElementById("operator");
const txtop2 = document.getElementById("op2");
const btncalculate = document.getElementById("calculate");
const presult = document.getElementById("result");

btncalculate.addEventListener('click', calculate);

function calculate() {
    const operator = txtoperator.value;
    const op1 = parseFloat(txtop1.value);
    const op2 = parseFloat(txtop2.value);

    if ((operator == "+" || operator == "-" || operator == "*" || operator == "/") && !isNaN(op1) && !isNaN(op2)) {
        let result;
        switch (operator) {
            case "+":
                result = op1 + op2;
                break;
            case "-":
                result = op1 - op2;
                break;
            case "*":
                result = op1 * op2;
                break;
            case "/":
                result = op2 !== 0 ? op1 / op2 : "Error: División por cero"; // Manejo de división por 0
                break;
            default:
                result = "No valid";
        }
        presult.innerText = "=" + result;
    } else {
        presult.innerText = "Not possible calculation";
    }
}

