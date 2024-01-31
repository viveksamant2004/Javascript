const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
const num4 = parseFloat(prompt("Enter fourth number: "));
const num5 = parseFloat(prompt("Enter fifth number: "));
let largest;
if(num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5 ) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
    largest = num2;
}
else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
    largest = num3;
}
else if (num4 >= num1 && num4 >= num3 && num4>= num2 && num4>= num5) {
    largest = num4;
}
else {
    largest = num5;
}
document.write("The largest number is " + largest);