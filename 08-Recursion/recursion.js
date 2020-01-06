function factorialIterativo(num){
	var a
	var acumulador=num
	for(var i=1; i<num;i++){
		a=num-i
		acumulador=acumulador*a

	}
	return acumulador
}


function factorial(num){

	if (num===0){

		return 1
	}else{
		return  num*factorial(num-1)
	}
	return

}


function fib(num){

	if (num<2){

		return 1
	}else{
		return  fib(num-1)+ fib(num-2)
	}
	return

}
	

function factores (num){
	var vector=[]

	for (var i=2; i<=num; i++) {
		while(num%i===0){

			vector.push(i)
			num=num/i

			factores(num)
		}
	}
	return vector
}