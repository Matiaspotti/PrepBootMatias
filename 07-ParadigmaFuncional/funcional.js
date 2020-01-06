function map(n,fn){
	for(var i=0; i<n.length;i++){
		n[i]=fn(n[i])
	}
	return n
}
function duplicar (numero){
	return numero*2
}


function filter(arreglo,fn){

	var array=[]
	for(var i=0;i<arreglo.length;i++){
		if (fn(arreglo[i])===true){

			array.push(arreglo[i])
		}



	}
	return array
}


function contains(valores,pedido){
var bandera
	for (key in valores){
		if (valores[key]===pedido){

			return true
		}
		else{
			bandera=false
		}
	}
	return bandera
}

function cuentaPalabras(parametro){


	return parametro.split(" ").length

}


function reduce(arreglo,numero,fn){
	var acumulador=numero
	var contadorF=0
	var contadorV=0
	for (var i=0 ;i<arreglo.length;i++){
		if(acumulador===false) {
			contadorF=contadorF+1
			if((contadorF===1)&&(fn===everyfalse)){

			return false
			}
			else if((contadorF===arreglo.length)&&(fn==anyfalse)){
				return false	
			}
		}
		else if(acumulador===true) {
			contadorV=contadorV+1
			if((contadorV===1)&&(fn===anyfalse)){

			return true
			}
			else if((contadorV===arreglo.length)&&(fn==everytrue)){
				return true	
			}
		}

		
		acumulador=fn(arreglo[i],acumulador)
		
	}
 	
	return acumulador

	

}

function cuentaPalabrasReduce(ar,nm){
	
	ar= cuentaPalabras(ar)
	return nm+ar
		
}


var everyfalse
function every(array,fn){
	var bandera
	everyfalse=fn
			
				if (array.length===0){

					bandera=true
				}
				else if (reduce(array,0,everyfalse)===true) {

					bandera=true 

				}
				else{

					bandera= false
					return bandera
				}
			

			return bandera


}
var anyfalse
function any(array,fn){

		anyfalse=fn

		var bandera
			
				if(array.length===0){

					bandera=false

				}
				else if (reduce(array,0,anyfalse)===true) {

					bandera=true

				}
				else{

					bandera= false
					return bandera
				}
			

			return bandera

}

function suma(array){

		function s(num,n){

			return num+n

		}
		return reduce(array,0,s)


}