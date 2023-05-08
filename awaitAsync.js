const objeto = {
    propiedad1: 'valor1',
    propiedad2: 'valor2',
    propiedad3: 'valor3'
}

const obtenerInformacion = ()=> {
    return new Promise((resolve) => {
        setTimeout( ()=> {resolve(objeto)},1000)
    })
}

const mostrarInformacion = async ()=> {
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarInformacion();
