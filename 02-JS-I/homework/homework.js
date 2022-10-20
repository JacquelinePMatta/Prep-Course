// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código ira dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
 var word= str
  return word
}

function suma(x, y) {
  var suma= x+y
  return suma
}

function resta(x, y) {
 var resta= x-y
  return resta
}

function multiplica(x, y) {
 var multiplicacion= x*y
  return multiplicacion
}
function divide(x, y) {
  var division= x/y
  return division
}

function sonIguales(x, y) {
  if (x===y){
   return true
  } else {
   return false
  }
}

function tienenMismaLongitud(str1, str2) {
 if (str1.length===str2.length){
   return true
 } else {
 return false
 }
  
}

function menosQueNoventa(num) {
  if (num<90){
     return true
  } else { 
    return false
  }
  
}

function mayorQueCincuenta(num) {
 if (num>50){
  return true
 } else {
  return false
 } 
}

function obtenerResto(x, y) {
 var resto= x % y
  return resto
}

function esPar(num) {
  if (num % 2===0){
    return true
  } else { 
    return false
  }
  
}

function esImpar(num) {
 if (num % 2===1){
  return true
 } else {
  return false
 }
  
}

function elevarAlCuadrado(num) {
   var cuadrado= Math.pow(num, 2)
  return cuadrado
}

function elevarAlCubo(num) {
 var cuadrado= Math.pow(num, 3)
 return cuadrado
  
}

function elevar(num, exponent) {
  var expo= Math.pow(num, exponent)
  return expo
}

function redondearNumero(num) {
 var redondo= Math.round(num)
 return redondo
}

function redondearHaciaArriba(num) {
 var arriba= Math.ceil(num)
 return arriba
  
}

function numeroRandom() {
  return Math.random()
  
}

function esPositivo(numero) {
 if (numero===0){
  return false
 } else if(numero>0){
return"Es positivo"
 } else{
  return "Es negativo"
 }
}

function agregarSimboloExclamacion(str) {
  return str + "!"
}

function combinarNombres(nombre, apellido) {
 return nombre+ " "+ apellido
  
}

function obtenerSaludo(nombre) {
  return "Hola "+ nombre +"!"
  
}

function obtenerAreaRectangulo(alto, ancho) {
  var area= alto*ancho
  return area
}


function retornarPerimetro(lado){
 return lado*4
  
}


function areaDelTriangulo(base, altura){
  var area= (base*altura)/2
return area
}


function deEuroAdolar(euro){
 var convertir= euro * 1.20
  return convertir
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  if (letra.length > 1) {
    return "Dato incorrecto"
  }else if (letra=== "a"|| letra ==="e"||letra==="i"||letra==="o"||letra==="u"){
    return "Es vocal"
  } else {
   return "Dato incorrecto"
  }
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
