const deserializado = {
    'variable1': '1',
    'variable2': '2'
}
// El stringfly es para convertir un objero a string
const serializado = JSON.stringify(deserializado); 

// Mientras que el .parse es para hacerlo lo contrario
console.log(serializado, typeof serializado ,JSON.parse(serializado)) 