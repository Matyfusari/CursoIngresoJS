function mostrar() {
  let numero;
  for (;;) {
    numero = parseInt(prompt("ingrese un numero"));
    while (isNaN(numero)) {
      numero = parseInt(prompt("eso no es numero. ingrese un numero"));
    }

    if (numero == 9) {
      break;
    }
    console.log(numero);
  }
  alert("chau");
} //FIN DE LA FUNCIÓN
