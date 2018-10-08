
var iteration = 1;
var operation = '';
var num1 = "";
var num2 = "";
var bottomString = "";

function updateTopDisplay(stringInput) {
    document.getElementById("topDisplay").value = stringInput;
}

function clearTopBottom() {
    bottomString = "";
    updateTopDisplay('0');
    updateBottomDisplay('0');
    iteration = 0;
    num1 = '';
    num2 = '';
}

function clearBottomDisplay() {
    bottomString = "";
}

function updateBottomDisplay(stringInput) {
    bottomString += stringInput;
    document.getElementById("bottomDisplay").value = bottomString;
}



function buttonClick(input) {

    let inputChar = input.toString();
    console.log(inputChar);

    switch (inputChar) {
        case 'add':
            inputChar = '+';
            input = ' plus ';
            operation = '+';
            break;
        case 'sub':
            inputChar = '-';
            input = ' minus ';
            operation = '-';
            break;
        case 'div':
            input = ' divided by ';
            inputChar = '/';
            operation = '/';
            break;
        case 'mul':
            input = ' times ';
            inputChar = 'x';
            operation = '*';
            break;
        case 'eqls':
            input = ' equals ';
            inputChar = '=';
            break;
        default:
    }


    updateBottomDisplay(inputChar);
    updateTopDisplay(inputChar);
    if (inputChar == '+' || inputChar == '/' || inputChar == '-' || inputChar == 'x' || inputChar == '=') {
        calculation(inputChar);
        return;
    }
    if (iteration > 2) {
        num2 = num2 + inputChar.toString();
    }
    else {
        if (iteration % 2 == 0) {
            num2 = num2 + inputChar.toString();
        }
        else {
            num1 = num1 + inputChar.toString();
        }
    }


    function calculation(input) {
        let total = 0;
        iteration++;

        if (input == '=') {
            switch (operation) {
                case '+':
                    total = parseFloat(num1) + parseFloat(num2);
                    break;
                case '-':
                    total = parseFloat(num1) - parseFloat(num2);
                    break;
                case '*':
                    total = parseFloat(num1) * parseFloat(num2);
                    break;
                case '/':
                    total = parseFloat(num1) / parseFloat(num2);
                    break;
                default:
            }

            // let totall = total.toString();
            console.log(total);

            updateTopDisplay(total);
            updateBottomDisplay(total);


            if (iteration < 3) {
                num1 = "";
                num2 = "";
            }
            else {
                num1 = total;
                num2 = "";

            }
        }

    }

}