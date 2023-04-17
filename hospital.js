//Crear un algoritmo donde esten listados 10 pacientes
// de un hosspital.
// Se debe crear una funcion donde se recorran los
// pacientes, si uno de sus nombre empieza con c, decirle
// que no puede pasar, si empieza con A decirle que espere
// y si empieza con otra letra dejarlo pasar.

const pacientes = ["Jose", "Dilan", "Carlos", "Diego", "Jazmin", "Luis", "Antony", "Jimmy", "Isan", "Pedro"];
function revisarPacientes(){
  for (let i = 0; i < pacientes.length; i++) {
    const primeraLetra = pacientes[i][0];
    if (primeraLetra === "C" || primeraLetra === "c") {
      console.log(`${pacientes[i]} no puede pasar.`);
    } else if (primeraLetra === "A" || primeraLetra === "a") {
      console.log(`${pacientes[i]} debe esperar.`);
    } else {
      console.log(`${pacientes[i]} puede pasar.`);
    }
  }
}
revisarPacientes();

class Aprendiz{
    constructor(nombre, edad, sexo, competencia, pacientes){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.competencia = competencia;
        this.pacientes = pacientes;
    }
    showInfoAprendiz(){
        console.log(`Tu nombre es ${this.nombre} tienes ${this.edad} años y eres un(a) ${this.sexo} tu competencia es ${this.competencia}`)
    }
    recorerA(){
        for (let i = 0; i < pacientes.length; i++) {
            const primeraLetra = this.pacientes[i][0];
            if (primeraLetra === "C" || primeraLetra === "c") {
              console.log(`${this.pacientes[i]} no puede pasar.`);
            } else if (primeraLetra === "A" || primeraLetra === "a") {
              console.log(`${this.pacientes[i]} debe esperar.`);
            } else {
              console.log(`${this.pacientes[i]} puede pasar.`);
            }
        }
    }
}
let Programacion = new Aprendiz("Julian", 23, "Mascuilino", "JacaSE", pacientes);
Programacion.showInfoAprendiz();
Programacion.recorerA();