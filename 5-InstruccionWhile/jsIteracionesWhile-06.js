function mostrar() {
  let numero;
  let total = 0;
  let promedio;
  let i = 0;

  while (i < 5) {
    numero = parseInt(prompt("Ingrese un numero"));

    total = total + numero;

    i++;
  }
  promedio = total / 5;

  document.getElementById("txtIdSuma").value = total;
  document.getElementById("txtIdPromedio").value = promedio;
} //FIN DE LA FUNCIÓN
