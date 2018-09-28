

var operation = '';
var num1 = "";
var num2 = "";
var bottomString = "";

function updateTopDisplay(stringInput){
	document.getElementById("topDisplay").value = stringInput;
}

function clearTopBottom(){
	bottomString = "";
	updateTopDisplay("0");
	updateTopDisplay("0");
}

function updateBottomDisplay(stringInput) {
	bottomString += stringInput;
	document.getElementById("bottomDisplay").value = bottomString;
}

function buttonclick(input)
{



}



function calculation(input)
{
    let total = 0;

    if (input == '=')
    {
        switch(operation)
        {
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
            default:
        }
    }




}