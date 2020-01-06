function Mamifero(nombre){
	this.nombre=nombre
	this.descendencia=[]
	


}

Mamifero.prototype.saludar= function(){

		return "Hola, mi nombre es "+this.nombre
	}


	Mamifero.prototype.nuevoHijo= function(){
		var hijo= new Mamifero(this.nombre+" Jr")
		this.descendencia.push(hijo)
		console.log(hijo)
		return hijo



	}


	function Gato(nombre,cl){


		Mamifero.call(this,nombre)
		this.color= cl

	}


	Gato.prototype=Object.create(Mamifero.prototype)
	Gato.prototype.constructor=Gato


	Gato.prototype.nuevoHijo= function(cl){
		var batman= new Gato(this.nombre + ' Jr',cl)
		
			
		this.descendencia.push(batman)
		return batman


	}
