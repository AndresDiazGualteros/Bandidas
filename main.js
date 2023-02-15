// llamar id de HTML



// botones
const btnGuardar = document.getElementById('guardar');
const btnGuardarBandidas = document.getElementById('guardarbandidas');
const btneliminarBandidas = document.getElementById('eliminarBandidas');


class Persona{
    nombre
    edad
    cedula
    bandidas

    constructor(nombre,edad,cedula,bandidas = []){
        this.nombre = nombre
        this.edad = edad
        this.cedula = cedula
        this.bandidas = bandidas
    }

    eliminarBandida(nombreBandida){
        const bandidasSerias = this.bandidas.filter(bandida => {
            return bandida != nombreBandida
        });
        this.bandidas = bandidasSerias
    }
}

const personas = [];
const bandidas = [];

btnGuardar.addEventListener('click',GuardarDatos)
function GuardarDatos(){
    // input
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const cedulas = document.getElementById('cedula').value;


    const nuevasPersona = new Persona (nombre,edad,cedulas,bandidas);
    personas.push(nuevasPersona)

    console.log(personas);

}

btnGuardarBandidas.addEventListener('click',agregarBandidas)
function agregarBandidas(){
    const bandida = document.getElementById('bandidas').value;
    bandidas.push(bandida)
    console.log(bandidas);
}

btneliminarBandidas.addEventListener('click',eliminarBandidas)
function eliminarBandidas(){
    const bandida = document.getElementById('bandidas').value;
    const nombre = document.getElementById('nombre').value;

    const quitarBandidas = personas.find(persona => {
        return persona.nombre == nombre
    })
    quitarBandidas.eliminarBandida(bandida)
    console.log(personas);
}

// const andres = new Persona ('andres',23,'2123232',['karen','valentina']);
// personas.push(andres)


// const estebanDido = personas.find(persona => {
//     return persona.nombre == 'andres'
// })

// estebanDido.eliminarBandida('valentina')

// console.log(estebanDido);