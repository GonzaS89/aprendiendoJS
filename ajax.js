let peticion;

if(window.XMLHttpRequest) peticion = new XMLHttpRequest;
else peticion = new ActiveXObject ("Microsoft.XMLHTTP");

peticion.addEventListener('load', ()=> {
    let respuesta;
    if(peticion.status == 200) respuesta = peticion.response;
    else respuesta = 'Lo siento, no se ha encontrado el recurso';
    console.log(JSON.parse(respuesta))
});

peticion.open ("GET", "informacion.txt");
peticion.send();