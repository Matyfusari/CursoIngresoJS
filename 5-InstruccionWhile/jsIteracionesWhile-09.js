/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  let numero;
  let max;
  let min;
  let respuesta;
  let flag = 1;

  do {
    numero = parseInt(prompt("Ingrese un numero: "));
    while (isNaN(numero)) {
      numero = prompt("Esto no es un numero. Ingrese un nunero valido: ");
    }

    if(flag || numero > max) {
		max = numero;
    }
	if( flag || numero < min){
		min = numero;
		flag = 0;
	}
	
		
      
    respuesta = prompt("quiere ingresar otro numero?: ");
  } while (respuesta == "s");
  document.getElementById("txtIdMaximo").value = max;
  document.getElementById("txtIdMinimo").value = min;
} //FIN DE LA FUNCIÓN
