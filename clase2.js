console.log("*** --- ASINCRONIA --- ***")
//PROMISES (Pueden cumplirse o fallar)

// Pido el listado de 5000 usuarios
// Muestro el menu principal
// Muestro foto de peerfil 
// Muestro todo ...
// Muestro el listado de 5000 mil usuarios

const tareaAsincrona = () =>{
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Proceso asincrono terminado");
            resolve();
        }, 1300);
    })
    return promise;
}
tareaAsincrona().then(function(){
    console.log("Todo OK");
});

console.log("Veamos si funciona");

