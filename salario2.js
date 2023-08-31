// Mensaje de bienvendia
alert("Bienvenido/a. \n\nAquí podrás calcular y llevar el control de tu peso! \n\n¡Empecemos!");

class Dia {
    constructor(fecha, peso) {
        this.fecha = fecha;
        this.peso = peso;
    }
}

const diasRegistrados = [];

function nuevoRegistro() {
    const fecha = prompt("Ingrese fecha");
    const peso = parseFloat(prompt("Ingrese tu peso en kg"));
    alert("Registro cargado");
    return new Dia(fecha, peso);
}

// Input de Datos 
const pregunta = prompt("Deseas agregar nuevo registro? (Responder si o no)");

if (pregunta.toLowerCase() === "si") {
    while (true) {
        const nuevoDia = nuevoRegistro();
        diasRegistrados.push(nuevoDia);
        
        const pregunta = prompt("Deseas agregar nuevo registro?");
        if (pregunta.toLowerCase() !== "si") {
            break;
        }
    }
}

// Procesamiento de datos 
let promedioPesoMes = 0;
const pesosRegistrados = diasRegistrados.map(d => d.peso);

for (const peso of pesosRegistrados) {
    promedioPesoMes += peso;
}

promedioPesoMes /= pesosRegistrados.length;

// Resultado de los datos 
alert("El promedio de peso registrado este mes es: " + promedioPesoMes.toFixed(2) + " kg");

