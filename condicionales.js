/*Condicionales
if-else anidado-compuesto  (operadores de comparacion)
switch
ternario

si gana 1.500.000 o menos entonces se le descontara en salud 3% y pension 5%
si gana entre 1.500.000 y 2.000.000 se le descontara en salud 4% y pension 6%
si gana mas de 2.000.000 se le descontara en salud 5% y pension 7%

*/
//datos de entrada
//var sueldo = parseInt(prompt("Digite sueldo del empleador"));
//proceso
/*if (sueldo <= 1_500_000) {
    var salud = sueldo * 3/100; //0.03
    var pension = sueldo * 5/100; //0.05
    var sueldoApagar = sueldo - (salud + pension);
    document.write("su sueldo es: " + sueldo+"<br>")
    document.write("dto en salud es: " + salud+"<br>")
    document.write("dto en pension es: " + pension+"<br>")
    document.write("su sueldo a pagar es: " + sueldoApagar+"<br>")
}else if (sueldo >= 1500001 && sueldo <= 2000000){
    var salud = sueldo * 4/100; //0.04
    var pension = sueldo * 6/100; //00.6
    var sueldoApagar = sueldo - (salud + pension);
    document.write("su sueldo es: " + sueldo+"<br>")
    document.write("dto en salud es: " + salud+"<br>")
    document.write("dto en pension es: " + pension+"<br>")
    document.write("su sueldo a pagar es: " + sueldoApagar+"<br>")
}else{
    var salud = sueldo * 5/100; //0.04
    var pension = sueldo *7/100; //0.06 
    var sueldoApagar = sueldo - (salud+pension);
    document.write("su sueldo es: " + sueldo+"<br>")
    document.write("dto en salud es: " + salud+"<br>")
    document.write("dto en pension es: " + pension+"<br>")
    document.write("su sueldo a pagar es: " + sueldoApagar+"<br>")
}
*/
//punto 3
/*var dia = parseInt (prompt("Digite un numero del 1 al 7"));
switch (dia) {
    case 1 : document.write("Dia 1 es Lunes"); 
        break;
    case 2 : document.write("Dia 2 es Martes"); 
        break;
    case 3 : document.write("Dia 3 es miercoles"); 
        break;
    case 4 : document.write("Dia 4 es jueves"); 
        break;   
    case 5 : document.write("Dia 5 es Viernes"); 
        break;
    case 6 : document.write("Dia 6 es Sabado"); 
        break;      
    case 7 : document.write("Dia 7 es Domingo"); 
        break;  
    default: document.write("El dia no es correcto");
        break;
}
*/
/*
// if ternario
var edad = 17;
edad >= 18 < edad ? document.write("Acceso permitido") : document.write("Acceso denegado");
document.write(edad);
*/

/* punto 1 */
//forma anidada
/*var num = parseInt(prompt("Digite un numero"));
if ( num > 0 ){
    if( num % 2 == 0 ){
        document.write("El numero"+num+" es positivo y par")
    }else{
        document.write("El numero"+num+" es positivo y impar")
    }
}else if( num < 0){
    if( num % 2 == 0){
        document.write("El numero"+num+" es negativo y par")
    }else{
        document.write("El numero"+num+" es negativo y impar")
    }
}else{
    document.write("El cero es positivo neutro");
}*/
//forma compuesta
if (num > && num % 2 == 0){
    document.write("El numero"+num+" es positivo y par")
}else if(num < 0 && num % 2 == 0){
    document.write("El numero"+num+" es negativo y par")
}else if(num < 0 && num % 2 != 0){
    document.write("El numero"+num+" es positivo y impar")  
}else if(num < 0 && num % 2 != 0){
    document.write("El numero"+num+" es negativo y impar")  
}else{
    document.write("El cero es positivo neutro")
}