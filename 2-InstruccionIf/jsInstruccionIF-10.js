function mostrar()
{
	let min = 1;
   let max = 10;
   let nota;

   nota = Math.floor( Math.random() * ( max - min + 1)) + min;

   if (nota < 4 ) {
    alert(nota + " vamos la proxima se puede" );
  } else {
    if (nota < 9) {
      alert(nota + " aprobo" );
    } else {
      alert(nota + " excelemte" );
    }
  }
	

}//FIN DE LA FUNCIÓN