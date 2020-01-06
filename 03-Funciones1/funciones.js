function crearCalculadora(){

	return {
			'resultado':0,
			'valor': function(v){
				return this.resultado
			},
			'sumar': function(numero){
				
				this.resultado+=numero
				return this.resultado

				
			},
			'restar': function (numero) {
				this.resultado-=numero
				return this.resultado
			},
			'reset': function(){
				this.resultado=0
				return this.resultado
			},
		}
	
}