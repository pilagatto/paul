// let length = 16;      //Numero
// let lastName = "Johnson";  //String
// let x = {firstName: "Paul", lastName: "Pilagatto"};   //Object


// console.log("Hola Mundo!"); muestra en pantalla

console.log("Hola Mundo!");



// Pregunta la edad al usuario para saber si puede trabajar o no
let edad = prompt("¿Cual es tu edad?");
if (isNaN(edad)) {
  console.log("No es un número");
} 
else if (edad >= 0 && edad < 13) {
  console.log("El trabajo de personas menores de 16 años está prohibido por ley.");

}

else if (edad >= 14 && edad < 16) {
  let trabajarConFamilia = prompt("¿Trabajas con tus padres en su empresa?");
  if (trabajarConFamilia === "si") {
    console.log("En estos casos se puede trabajar 3 horas al día o 15 horas a la semana.");
  } else {
    console.log("El trabajo de personas menores de 16 años está prohibido por ley.");
  }
} else if (edad >= 16) {
  console.log("Tienes derecho a trabajar.");
}
//Termina acá

  
  //boton 
  function createBoton() {
    window.onload = function() {
      document.getElementById('boton').onclick = function () {
      console.log("Capturamos el elemento click");
      document.getElementById("demo").innerHTML = "Estoy probando mi 2do programa en JS. El primero con la pregunta al principio, ese fue un poco más dificíl.14";
      
      }
    }
  }
 
 
 // function boton_ocultar() {
 //   document.getElementById('boton_ocultar').addEventListener('click', function()   {
 //          //console.log("Hola mundo desde EventListener");
 //          document.getElementById('foto').style.display = 'none';
 //   });
 //   }
  

  //boton color de fondo
//  function boton_color() {
//    window.onload = function() {
//      document.getElementById('boton_color').addEventListener('click', function()   {
//      console.log("Hola mundo desde EventListener");
//      document.body.style.backgroundColor = '#62F016'; //https://htmlcolorcodes.com/  para elegir el fondo de color en HEX

//      }
//      )
//    }
//  }






//LO ULTIMO QUE TOQUEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
 // function boton_color() {
 //   var boton = document.getElementById("boton_color");
//    boton.addEventListener("click", function() {
 //     console.log("Hola mundo desde EventListener");
 //     document.body.style.backgroundColor = "green"; //https://htmlcolorcodes.com/  para elegir el fondo de color en HEX
 //   });
//  }

/*

let numero;    // Definimos la variable 
console.log(numero);  // Mostramos en pantalla
numero = 5;    // X le asignamos unvalor numérico
console.log(numero);
nombre = "john" ;    // X ahora almacena un string
console.log(nombre);

*/