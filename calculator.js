

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
	updateBottomDisplay("0");
}

function updateBottomDisplay(stringInput) {
	bottomString += stringInput;
	document.getElementById("bottomDisplay").value = bottomString;
}



// switch (inputChar)
//   {
//     case 'a':
//       inputChar = '+';
//       input = ' plus ';
//       operation = '+';
//       break;
//     case 's':
//       inputChar = '-';
//       input = ' minus ';
//       operation = '-';
//       break;
//     case 'd':
//       input = ' divided by ';
//       inputChar = '/';
//       operation = '/';
//       break;
//     case 'x':
//       input = ' times ';
//       inputChar = 'x';
//       operation = '*';
//       break;
//     case 'e':
//       input = ' equals ';
//       inputChar = '=';
//       break;
//     case 'p':
//       input = '.';
//       break;
//     default:
//   }


function buttonClick(input){

    console.log(input);
  if (inputChar == '+' || inputChar == '/' || inputChar == '-' || inputChar == 'x' || inputChar == '=')
  {
    calculation(inputchar);
    return;
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
}