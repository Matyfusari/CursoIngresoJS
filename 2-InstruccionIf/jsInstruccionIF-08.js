function mostrar() 
{
  let edad;
  let estadoCivil;

  edad = parseInt(document.getElementById("txtIdEdad").value);
  estadoCivil = document.getElementById("estadoCivil").value;

    if( edad >= 18 && estadoCivil == "Soltero") {
	  alert("es Soltero y no es menor");
    }

   


} //FIN DE LA FUNCIÓN
