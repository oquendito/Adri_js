/*let alumno = prompt("Ingrese su nombre");
let calificacion = prompt("Ingrese su calificacion");

if(calificacion >= 1 && calificacion <= 10){

    if(calificacion>=7 && calificacion <= 9){
        alert("Aprobado");
    }else if(calificacion==10){
        alert("Óptimo");
    }else{
        alert("Reprobado");
    }

}else{
    alert("Calificación no disponible, vuelve en 3 días hábiles");
}

console.log(`${alumno} ${calificacion}`);*/



function generarTabla(numero){

    var num = parseInt(numero);

    var tabla = document.getElementById("tabla");

    for(let contador = 1; contador <= 10; contador++){
        let resultado = contador * num;

        let fila = tabla.insertRow(contador - 1);
        let celda = fila.insertCell(0);
        celda.innerHTML = contador + " * " + num + " = " + resultado;
    }
}

