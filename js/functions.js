console.log("prueba de coneccion");
//******tipo de variables******
//const para variables constantes
//const son variables finales,valores que no cambian pero se usan en ejercicios 
const pi = 3.14;
const pulgada = 2.54;
const name = "valentina prado sarabia";
//var para variables globales,esta variable si puede cambiar
var cal_days = 20;
//let para variables de bloque o locales,b¿van en bloques como un if
let j=0;
let count =1;

//forma de impresion

//alert sirve para imprimir variables
alert(name);

//consola
console.log(name);
console.log(cal_days);
console.log("15");
console.log(true);

//pantalla - body
// get es capturar
document.write(name);
document.getElementById("box_one").innerHTML = "<h1> valentina prado </h1>";
document.getElementById("box_two").innerText= "<h1>valentina prado</h1>";

//librerias
 
Swal.fire({
    icon : 'info',
    title:'valentina',
    text:name,
    footer : name,
    showConfirmButton :false,
    timer :2000,
    position :'center-end'
  
})
//swal.fire(name)


//*******TIPOS DE DATOS*******
//numericos
var number_one =10;
var number_two =2.5;
//string
var text = "soy un texto";
//boolean
var boolean = true; //false
//array
let array_num =[1,2,3,4,5,6];
let array_tex =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
let array_mix = [1,"a",2.5,"c"];
let array_mul=[
    {name:"valentina",last_name:"prado",age:"31"},
    {name:"pepe",last_name:"perez",age:"21"},
    {name:"ana",last_name:"osorio",age:"11"},
    {name:"juan",last_name:"prada",age:"41"},
];

//****operadores basicos****

//suma
var suma = number_one+number_two;
console.log("suma =" + suma);

//resta
var resta = number_one-number_two;
console.log("resta =" + resta);

//multiplicacion
var multi = number_one*number_two;
console.log("multiplicacion =" + multi);

//division
var division = number_one+number_two;
console.log("division =" + division);

//modulo
var modulo = number_one%number_two;
console.log("modulo =" + modulo);

console.log(
    "suma =" + suma +"\n"+
    "resta =" + resta +"\n"+
    "multiplicacion =" + multi +"\n"+
    "division =" + division +"\n"+
    "modulo =" + modulo.toFixed(2) +"\n"
);
//tofixed(2) sirve para mostar los decimales que se nombren

var respuesta = "suma =" + suma +"<br>"+
"resta =" + resta +"<br>"+
"multiplicacion =" + multi +"<br>"+
"division =" + division +"<br>"+
"modulo =" + modulo ;

 
Swal.fire(respuesta);
Swal.fire({
    showConfirmButton:false,
    background:'#000',
    icon :'success',
    title : 'respuesta',
    html : respuesta,

});