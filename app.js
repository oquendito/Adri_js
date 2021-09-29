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

console.log(`${alumno} ${calificacion}`);


let  fecha = new Date(),

    hora = fecha.getHours();


let saludo = function (hr) {

    if (hr <= 5) {

    return 'Muy temprano Seba';

    } else if(hr >= 6 && hr <= 11) {

    return 'Buen día!';

    } else if(hr >= 12 && hr <= 18) {

    return 'Buenas tardes!';

    } else {

    return 'A mimir';

    }

};


console.log( saludo(hora) ); //Imprime el saludo dependiendo la hora del día

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

function saludar(){console.log (`Hola Seba! Esto es una calculadora de tablas de multiplicar :)`);
}

saludar ();*/

let afirmacion = prompt("Desea ingresar al sitio?");

if(afirmacion ="Si"){
        alert("Inicie sesión");
}

function login(){
  let form = document.form;
  let user = form.usuario.value;
  let pass = form.contraseña.value;

  if(user == "Seba" && pass == "coderhouse"){
    alert("bienvenido Seba!");
  }else{
    alert("datos incorrectos");
  }
} 

