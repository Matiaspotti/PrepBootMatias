function CalculadoraNPI(){
  this.bandera=false
  this.numeros=[]
  this.resultado=0

}



CalculadoraNPI.prototype.agregar= function(n){

        this.numeros.push(n)
        console.log(this.numeros)

}


CalculadoraNPI.prototype.sumar=function(){
		if(this.numeros.length<2){

			throw 'La calculadoraNPI necesita por lo menos 2 números'
		}else{	
		
		j=this.numeros.length-1
		this.resultado=this.numeros[j]+this.numeros[j-1]
		this.numeros.pop(j)
		this.numeros.pop(j-1)
		this.numeros.push(this.resultado)
		
		}}
	
		
	
  

  



CalculadoraNPI.prototype.valor=function(){

	return this.resultado
}


CalculadoraNPI.prototype.restar= function(){
	 	if(this.numeros.length<2){

			throw 'La calculadoraNPI necesita por lo menos 2 números'
		}else{
		j=this.numeros.length-1
		this.resultado=this.numeros[j-1]-this.numeros[j]
		this.numeros.pop(j)
		this.numeros.pop(j-1)
		this.numeros.push(this.resultado)	
		}}
	
  
		


CalculadoraNPI.prototype.dividir= function(){
		if(this.numeros.length<2){

			throw 'La calculadoraNPI necesita por lo menos 2 números'
		}else{	
		j=this.numeros.length-1
		this.resultado=this.numeros[j-1]/this.numeros[j]
		this.numeros.pop(j)
		this.numeros.pop(j-1)
		this.numeros.push(this.resultado)
  		}}			



CalculadoraNPI.prototype.multiplicar= function(){
		if(this.numeros.length<2){

			throw 'La calculadoraNPI necesita por lo menos 2 números'
		}else{
	 	j=this.numeros.length-1
		this.resultado=this.numeros[j-1]*this.numeros[j]
		this.numeros.pop(j)
		this.numeros.pop(j-1)
		this.numeros.push(this.resultado)
  }}