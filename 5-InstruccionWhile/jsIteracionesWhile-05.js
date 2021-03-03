/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese sexo f / m:").toLowerCase;

	while(sexo != "m" && sexo != "f"  ) {
		sexo = prompt("error sexo invalido. reingrese f / m:");
	}
	document.getElementById("txtIdSexo").value = sexo;
	
	
}//FIN DE LA FUNCIÓN