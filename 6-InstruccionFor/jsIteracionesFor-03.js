function mostrar()
{

 let repeticiones;
 repeteciones = parseInt(prompt("ingrese el numero de repeticiones"));
 while (isNaN(repeticiones) || repeticiones <= 0){
    repeticiones = parseInt(prompt("dato invalido. ingrese el numero de repeticiones"));
 }
for( let i=0; i < repeticiones; i++){
	document.write("Hola utn fra <br>");
}

}//FIN DE LA FUNCIÓN