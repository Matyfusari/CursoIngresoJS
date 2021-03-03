function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad < 13) {
    alert("es niño");
  } else {
    if (edad >= 13 && edad <= 17) {
      alert("es adolecente");
    } else {
      alert("es adulto");
    }
  }
} //FIN DE LA FUNCIÓN
 