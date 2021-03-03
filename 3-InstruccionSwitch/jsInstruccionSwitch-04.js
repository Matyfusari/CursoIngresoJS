function mostrar() {
  //tomo el mes
  let mes;

  mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Febrero":
      alert("tiene 28 dias");
      break;
    case "Enero":
    case "Marzo":
    case "Agosto":
    case "Diciembre":
    case "Octubre":
    case "Julio":
    case "Mayo":
      alert("tiene 31 dias");
      break;
    default:
      alert("tiene 30 dias");
      break;
  }
} //FIN DE LA FUNCIÓN
