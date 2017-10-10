//Solicitando al usuario mediante un prompt que coloque su numero de targeta a validar.
var customerCard=prompt("Ingrese su numero de tarjeta");//4083952015263
//Creando una funcion que tenga como parametro cardNumber que a su vez tiene como valor el numero de targeta del usuario.
function isValidCard(cardNumber){
   var arrayNumber=[];
   var sumValue=0;
   var resultTotal=0;
//He creado una condicion que verifique los numeros pares que inicie con el indice 1
  if(customerCard*2!==0){
//He creado un for que haga que mi array recorra de derecha a izquierda .
   for (var i=cardNumber.length-1;i>=0;i--){
     var number=parseInt (cardNumber[i]);
//colocando mis numeros a mi array vacio con el metodo push coloco mis numeros dentro del array.
     arrayNumber.push(cardNumber[i]);
   }
//Creando un for con variable j que recorre todo mi array y a su vez multiplique los numeros *2.
   for (var j=0 ;j< arrayNumber.length ;j++ ){
     if (j%2!==0){
       arrayNumber[j]=arrayNumber[j]*2
    }
  }
//recorriendo nuevamente mi array pero esta vez sumando los numeros que tengan dos digitos.
  for (var k=0; k<arrayNumber.length; k++){
    if(arrayNumber[k]>=10){
      var value=arrayNumber[k]/10;
      var result1 = arrayNumber[k]%10;
      var result2 = parseInt(value);
      var result = result1+result2;
      resultTotal+=result;
    }
     else if (arrayNumber[k]<10 ){
     sumValue += arrayNumber[k]*1;
     }
    }
//Sumando mis valores multiplicados con mi resultado de la suma de impares .
    var sumResult=resultTotal+sumValue
//Validando si el resultado residuo de 10 es 0 y mostrando una alerta que indique que la targeta es valida.
    if (sumResult%10===0){
      alert('Su tarjeta es valida');
    }
    else
      alert(' ingrese los numeros de una tarjeta valida');
      return [resultTotal,sumValue, result,result1]
  }
  else
    alert('ingresar valores ');
  }

isValidCard(customerCard);
