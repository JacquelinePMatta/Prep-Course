// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x>y){
    return x
  } else if (y>x){
    return y
  } else {
    return x
  }
}

function mayoriaDeEdad(edad) {
  if (edad>=18){
    return "Allowed"
  } else {
    return "Not allowed"
  }
}
  
function conection(status) {
  switch (status){
    case 1: console.log("Online")
    break;
    case 2: console.log("Away")
    break;
    default: console.log("Offline")
    break;
  }
}

function saludo(idioma) {

  switch (idioma){
    case "aleman": console.log("Guten Tag!")
    break;
    case "mandarin": console.log("Ni Hao!")
    break;
    case "ingles": console.log("Hello!")
    break;
    default: console.log("Hola!")
    break;
  }
}

function colors(color) {
  switch (color){
    case "blue": console.log("This is blue")
    break;
    case "red": console.log("This is red")
    break;
    case "green": console.log("This is green")
    break;
    case "orange": console.log("This is orange")
    break;
    default: console.log("Color not found")
  }
}

function esDiezOCinco(numero) {
  if (numero===10||numero===5){
    return true
  } else { 
    return false 
  }
}

function estaEnRango(numero) {
  if (numero<50 && numero>20){
    return true
  } else {
    return false 
  }
}

function esEntero(numero) {
if (numero% 1===0){
  return true 
} return false
}

function fizzBuzz(numero) {
  if (numero %3 ===0){
    return "fizz"
  } else if (numero %5===0){
    return "buzz"
  } else if (numero %3===0 && numero %5===0){
    return "fizzbuzz"
  } else {
    return numero
  }
}

function operadoresLogicos(num1, num2, num3) {
  if (num1<0 || num2<0 || num3<0){
    return "Hay negativos"
  } else if (num1> num2 && num1>num3){
    return "Número 1 es mayor y positivo"
  } else if (num3> num1 && num3> num2){
    num3++ 
    return num3
  } else if (num1===0|| num2===0 || num3===0){
    return "Error"
  } else {
    return false
  }
}

function esPrimo(numero) {
if (numero===2) {
  return true
} else if (numero<2){
  return false 
} else {
  for (var i=2; i<numero; i++){
    if (numero%i===0){
      return false
    }
  }
} return true
}

function esVerdadero(valor){
  if (valor=== true){
    return "Soy verdadero"
  } else {
    return "Soy falso"
  }

}

function tablaDelSeis(){ 
  let TablaDel6 = []
  for (let i = 0; i < 11; i++) {
        TablaDel6.push(6 * i)
  }
  return TablaDel6
}


function tieneTresDigitos(numero){
 if (numero> 99 && numero< 1000){
  return true
 } else {
  return false
 }
  
}

function doWhile(numero) {
  do {
    var n= 0
    n= n++
    numero= numero +5
  } while (n< 8)
  return numero
} 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
