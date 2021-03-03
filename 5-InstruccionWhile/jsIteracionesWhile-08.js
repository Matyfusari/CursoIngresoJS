/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let numero;
  let acumPos = 0;
  let acumNeg = 1;
  let respuesta = "s";
  let flag = 0;

  do {
    numero = parseInt(prompt("ingrese un numero"));

    while (isNaN(numero)) {
      numero = parseInt(
        prompt("eso no es un numero. ingrese un numero valido: ")
      );
    }
    if (numero >= 0) {
      acumPos += numero;
    } else {
      acumNeg *= numero;
      flag = 1;
    }

    respuesta = prompt("quiere ingresar otro numero?: ");
  } while (respuesta == "s");
  
  
  if(flag == 0){
     acumNeg = 0;
  }

  document.getElementById("txtIdSuma").value = acumPos;
  document.getElementById("txtIdProducto").value = acumNeg;
} //FIN DE LA FUNCIÓN
