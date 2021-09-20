let alumno = prompt("Ingrese su nombre");
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

console.log(`${alumno} ${calificacion}`);

