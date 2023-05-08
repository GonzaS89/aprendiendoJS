class Persona {
    constructor (nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }
}

const data = [
    ['Gonza', 'Sinhg'],
    ['Jessi', 'Coronel'],
    ['Avril', 'Sinhg']
];

const personas = [];

for (let index = 0; index < data.length; index++) {
    personas[index] = new Persona (data[index][0],data[index][1])
}
console.log(personas);

function obtenerPersona (id, callback) { 
    if(personas[id] == undefined) callback('No se ha encontrado la persona')
    else callback(null,personas[id])
}

obtenerPersona(1,(error, persona) => {
    if(error) console.log('error');
    else console.log(persona.nombre, persona.apellido)
})
