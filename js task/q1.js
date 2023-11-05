let operator=prompt("Enter operator: ") ;
let num1=parseFloat(prompt("enter number"));
let num2=parseFloat(prompt("enter number 2"));
let result=0;

switch (operator){
     case "+" : 
     result=num1+num2;
     break;
     case "-":
        result=num1-num2;
        break;
    case "*":
        result=num1*num2;
        break
    case "/" :
        result=num1/ num2;
    default:
        result=0;
}

document.write("Operator :  "+operator +"<br> ");
document.write("Number1: "+num1 +"<br> ");
document.write("Number2: "+num2 +" <br> ");
document.write("Result: "+result +"<br>  ");
document.write(num1 +" " + operator +" " +num2 +"= " +result);
