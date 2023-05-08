// try and catch


const input = document.getElementById('input');
const submit = document.getElementById('submit');

submit.addEventListener('click', ()=> {
    let mensaje,resultado

    try{
    ingreso = parseInt(input.value);
        if(isNaN(ingreso)){
            throw 'Hola';
        }
        mensaje = obtenerMensaje(ingreso)
    }
    catch(e){
        mensaje = '454544'
    }
    mostrarFinal (mensaje,resultado)
})

const obtenerMensaje = (ing)=> {
    let resultado;
    switch (ing) {
        case 1: resultado = 'bajo';
        break;
        case 2: resultado = 'maso';
        break;
        case 3: resultado = 'alto';
        break;
        default: resultado = 'no corresponde el ingreso'
    }
    return resultado
}


const mostrarFinal = (msg,res)=> {
    console.log(msg);
    console.log(res);
}