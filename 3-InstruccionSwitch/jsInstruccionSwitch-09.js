function mostrar() {
  let estacion;
  let destino;
  let precioBase = 15000;
  let aumento;
  let descuento;
  let precioFinal;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        aumento = (precioBase * 20) / 100;
        precioFinal = precioBase + aumento;
      } else if (destino == "Mar del plata") {
        descuento = (precioBase * 20) / 100;
        precioFinal = precioBase - descuento;
      } else {
        descuento = (precioBase * 10) / 100;
        precioFinal = precioBase - descuento;
      }

      break;
    case "Verano":
      if (destino == "Bariloche") {
        descuento = (precioBase * 20) / 100;
        precioFinal = precioBase - descuento;
      } else if (destino == "Mar del plata") {
        aumento = (precioBase * 10) / 100;
        precioFinal = precioBase + aumento;
      } else {
        aumento = (precioBase * 10) / 100;
        precioFinal = precioBase + aumento;
      }

      break;
    case "Pimavera":
    case "Otoño":
      if (
        destino == "Bariloche" ||
        destino == "Cataratas" ||
        destino == "Mar del plata"
      ) {
        aumento = (precioBase * 10) / 100;
        precioFinal = precioBase + aumento;
      } else {
        precioFinal = precioBase;
      }
      break;
  }
  alert("El precio final es $ " + precioFinal.toFixed(2));
} //FIN DE LA FUNCIÓN
