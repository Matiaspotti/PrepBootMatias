function setPropsOnObj(propiedad) {
	propiedad['la']={
		clave:{
			secreta:{
				es:404
			}
		}
	}
			propiedad.p=5
			propiedad['plataforma']=5
			propiedad['proximo']= function(n){

				return	n+1
	}

}

function setPropsOnArr (arreglo){
	arreglo.push(5)
	arreglo.push({})
	arreglo['hola']= function(){

		return 'Hola!'
	}
	arreglo['river']='plate'
	arreglo['doble']= function(num){
		 return num*2
	}
}

function setPropsOnFunc(parametrob){
	parametrob.year='2017'
	parametrob['mitad']= function(n){

		return n/2
	}
	parametrob['prototype']['helloWorld']= function (){

		return 'Hello World'
	}
}
