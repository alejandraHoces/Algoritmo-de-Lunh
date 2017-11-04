# Producto final Algoritmo de lunh

### Flujograma Algoritmo de Lunh

Ingrese al link
>https://imgur.com/a/IE16A

### Pseudocodigo
1.Inicio;  
2.Solicitando la introduccion de el numero de targeta a validar;  
3.Inicializar función isValidCard parametro: a=cardNumber(numero de targeta);  
4.Inicializar variable arrayNumber=[ ];  
5.Inicializar variable sumValue=0;  
6.Inicializar variable resultTotal=0;  
7.Si cardNumber* 2 !== 0;  
8.Multiplicar numeros con indices impares y que inicie en el indice 1;  
9.Leer mensaje;  
10.Para i=cardNumber.length-1; i>=0; i--;  
11.Inicializar variable number =parseInt(cardNumber[i]) (convirtiendo una cadena a un entero);  
12.ArrayNumber.push(cardNumber[i]);  
12.1.Colocar los numeros en el array vacio,  
13.Para j=0; j< arrayNumber.length; j++;  
14.Si j%2!==0;  
15.Si residuo de 2 es diferente a 0 tomar indice impar;  
16.arrayNumber[j]=arrayNumber[j]* 2;  
17.Multiplicar los numeros* 2;  
18.Para k=0; k<arrayNumber.length;k++;  

19.Si arrayNumber[k]>=10;  
20.Sumar entre si ,a los numeros que tengan dos cifras;  
21.Inicializar variable result1;  
22.Contiene el primer valor arrayNumber[k]/10;  
23.Inicializar variable result2;  
24.Contiene el segundo valor arrayNumber[k]%10;  
25.Inicializar variable result;  
26.Contiene la suma del primer valor y segundo valor ;  
27.Igualar variable result a resultTotal;  
28.Si arrayNumber[k]<10;  
29.Igualar arrayNumber[k]* 1 a sumValue;  
30.Inicializar variable sumResult;  
31.Contiene resultTotal+sumValue;  
32.Si sumResult%10===0;  
33.Si el resultado es residuo de 10 igual a 0 ;  
34.Escribe alerta "Tarjeta de credito valida";  
35.Fin.



### README

Se puede apreciar la explicacion de como opera el algoritmo de Lunh en mi programa
primero se ingresa el numero de tarjeta de credito a validar y luego el algoritmo verifica los numeros de derecha a izquierda separando los numeros que se encuentran en los indices pares y los multiplica por 2 seguidamente suma los numeros que tienen dos digitos y eso al resultado con los numeros que se encuentran en las posiciones impares si el resultado residuo de diez es igual a cero se muestra un mensaje que indica que la targeta es valida .
