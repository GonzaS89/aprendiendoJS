let nombre = 'Gonzalo';

const promesa = new Promise((resolve, reject) => {
    if(nombre !== 'Gonzalo') reject('Lo siento pero el nombre no es Gonzalo');
    resolve(nombre);
})

promesa.then((resultado) => {
    console.log(resultado);
}).catch((e) => {
    console.log(e)
})


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

const obtenerPersona = (id) => { 
    return new Promise ( (resolve,reject) => {
    if(personas[id] == undefined) reject('No se ha encontrado la persona');
    resolve(personas[id]);
})
}


obtenerPersona(1).then((persona) => {
    console.log(persona.nombre);
}).catch((e) => {
    console.log(e)
})