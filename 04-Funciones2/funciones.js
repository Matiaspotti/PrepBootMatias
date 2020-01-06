function concatenar (){

	var respuesta=""
	 for (var i=0; i<arguments.length;i++){
	 	 respuesta+=arguments[i]
	 }
	 
	return respuesta 
}


function invocarFunciones() {
	var fn=""
	for (i=0; i<arguments.length;i++){

		fn+=(arguments[i]())

	}
	return fn 
	
}

function creadorDeIncrementos(n){
		
		return function (numeros){

			numero+=n
			return numeros
		}
}


function invocacionUnica(fn){
	var fly = true
	
		 return function(){
		 	if(fly){
	 			fly=false
	 			return fn()
	 		}
		}

	}

function objetoConClousure(){

	var valor=0
	return {

			
		'incremento':function() {
			valor+=1
			return valor
		},
		'incrementoPor10':function (){
			valor+=10
			return valor
		},
		'pedirValor': function(){
			return valor
		},
		'cambiarValor': function(numeros){
			valor=numeros
			return valor
		}
	}
}


 function ListaDeFuncionesInvitados(array,cod){
 	var arreglo=[]
 	for (var i=0; i<array.length;i++){

 		arreglo.push(function(j){
 			return function(n){
 				if(cod===n){
 					console.log(array[j])
 					return  array[j]
 				}
 				else{
 					
 					return 'código secreto: invalido'
 					 
 				}
 				


 			} 

 		}(i))

 	}
 	return arreglo 
 }


 function armarListaDeInvitados(fn,cod){
 			
 			var v=[]

 			for (i=0;i<fn.length;i++){
 				if (typeof fn[i](cod)==='string' ){

 					v.push(fn[i](cod))
 				}

 			}
 			return v
 }