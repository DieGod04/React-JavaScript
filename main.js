console.log("ciclos repetitivos (for, while, do-while)")

for(let i=0; i<=0; i++){
console.log(i);
}

let i=0;
while(i<=10){
console.log(i);
i++;
}


do{
    console.log(i);
    i++;
}while(i<=0);


//MANEJO DE STRING//

let saludo = "Hola Clase !"

//Encontrar un caraacter, si no lo encuentra pone -1,
//si lo encuentra pone el numero de ubicacion
console.log( saludo.indexOf("cl"))

//string inicia o termina//
console.log( saludo.startsWith("c"));
console.log( saludo.endsWith("!"));

//si el string incluye cierto carcater o palabra
console.log( saludo.includes("s"));

console.log("**-- Operadores --**")
//Operador AND (&&) devuelve b si a y b son
//verdaderos, sino a
console.log(45 && false)
console.log(50 && "10")

//Operdor OR (||) devuelve a (si es verdadero),
// o si no, b
console.log(false || "verdadero")
console.log("10" || 10)

let isCorrect = true;
const doTask = () => "OK!";
console.log(isCorrect && doTask());

let instructores = ["juan", "jesu", "carla"];
console.log(instructores[2])

const tecnico = {
    name: "Programacion de Software",
    time: "1 anio",
    practicas: true
}
console.log(tecnico.name + tecnico.time) 

console.log("--- Interpolacion de variables ---")

const data = `soy un texto combinado con variables ${tecnico.practicas} como esta y esta ${instructores}`;

console.log(data);


//FUNCION
//Es un fragmento de codigo, que resuelve un problema unico y muy puntual
// que se puede reutilizar cuantas veces sea necesario
console.log("*** --- FUNCIONES --- ***")
function sumar(x,y){
    let suma = x+ y;
    console.log("Suma:" + suma);
}

//Funcion de flecha
const saludar =(instruc) => {
    let i=0
    while(i<=instruc.length){
        console.log(`Hola profesor ${instruc[i]}`);
        i++;
    }
}
sumar( 5, 20 );
saludar(instructores);


//Rest: Junta los elementos en un arreglo
function saludarRest(saludo, ...nombres){
    for(i in nombres){
        console.log(`${saludo} ${nombres[i]}`);
    }
}
saludarRest("Hola", "Fernando", "Javier","Mritza", "Teo");

//Spread: Esparce los elementos como si fueran enviados en forma separada
function saludarSpread(saludo, ...nombres){
    console.log(`${saludo} ${nombres}.`);
}
let personas = ["Maria" , "Juan", "Pedro" ,"Julian"];
saludarSpread("Hola", personas);

//Otro ejemplo de Spread
let partes = ["piernas", "brazos"];
let cuerpo = ["cabeza", "cuello", ...partes, "pies", "cabello"];
console.log(cuerpo);

// CLASES: Es un plantilla, define las propiedades y metodos de un
// objeto. Se pueden reutilizar por medio de instancias.
// Cada clase una tiene sus propiedades y metodos
// Todas las clases tienen un constructor donde se definen datos iniciales

console.log("*** --- CLASES --- ***");

class Persona{
    constructor(nombre, edad, sexo,){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    getName(){
        console.log("Tu te llamas "+ this.nombre)
    }
    getAllInfo(){
        console.log(`Tu nombre es ${this.nombre} tienes ${this.edad} años y eres un(a) ${this.sexo}`)
    }
}

// Juanes es una instancia de la clase Persona, osea que Juanes ahora es un objeto
let juanes = new Persona("Juanes", 47, "Masculino");
juanes.getName();
juanes.getAllInfo();

class Aprendiz extends Persona{
    constructor(nombre, edad, sexo, programa, competencia){
        super(nombre,edad,sexo);
        this.programa = programa;
        this.competencia = competencia;
    }
    getAprendiz(){
        console.log(`Te llamas ${this.nombre} tienes ${this.edad} años eres un(a) ${this.sexo}, tu programa es ${this.programa} y estas dando ${this.competencia}`)
    }
    
}
let julian = new Aprendiz("Julian", 19, "Masculino", "Motores", "Mantenimento de vehiculos pesados");
julian.getAprendiz();