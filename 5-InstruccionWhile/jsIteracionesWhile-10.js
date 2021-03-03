/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  let numero;
  let acumPos = 0;
  let acumNeg = 0;
  let contPos = 0;
  let contNeg = 0;
  let contCeros = 0;
  let contPares = 0;
  let promPos;
  let promNeg;
  let diferencia;

  let respuesta;

  do {
    numero = parseInt(prompt("ingrese un numero"));

    while (isNaN(numero)) {
      numero = parseInt(prompt("eso no es un numero. ingrese un numero: "));
    }
    if (numero > 0) {
      acumPos += numero;
      contPos++;
    } else if (numero < 0) {
      acumNeg += numero;
      contNeg++;
    } else {
      contCeros++;
    }
    if (numero % 2 == 0) {
      contPares++;
    }
    respuesta = prompt("quiere ingresar otro numero?:");
  } while (respuesta == "s");
  if (contPos != 0) {
    promPos = acumPos / contPos;
  }
  if (contNeg != 0) {
    promNeg = acumNeg / contNeg;
  }

  diferencia = contPos - contNeg;

  console.log(" suma de los negativos " + acumNeg);

  console.log(" suma de los positivos " + acumPos);

  console.log(" cantidad de positivos " + contPos);

  console.log(" cantidad de negativos " + contNeg);

  console.log(" cantidad de ceros " + contCeros);

  console.log(" cantidad de numeros pares " + contPares);

  console.log(" promedio de positivos " + promPos);

  console.log(" promedio de negativos " + promNeg);

  console.log(" diferencia entre positivos y negativos " + diferencia);
} //FIN DE LA FUNCIÓN
