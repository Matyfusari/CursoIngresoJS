/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let numero;
  let total = 0;
  let promedio;
  let respuesta = "s";
  let contador = 0;

  while (respuesta == "s") {
    numero = parseInt(prompt("Ingrese un numero: "));
    total += numero;
    respuesta = prompt("quiere ingresar otro numero?: ");
    contador++;
  }

  promedio = total / contador;
  
  document.getElementById("txtIdSuma").value = total;
  document.getElementById("txtIdPromedio").value = promedio;

  
} //FIN DE LA FUNCIÓN
