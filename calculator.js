

var operation = '';
var num1 = "";
var num2 = "";


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