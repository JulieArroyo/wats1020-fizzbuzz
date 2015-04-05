var respom



// Place your FizzBuzz code here. 
//Count through numbers 1-20 and figure out if eas one is divisible by 3 5 or both.
for (i=1; i<=20; i++){
		// For each number do the following check:

		//see if number is divisible by 3
	if (i % 3 ===0){
		//if so , see if also divisible by 5
		if(i % 5 ===0){
		//if divisible by 3 and 5 :print Fizzbuzz	
			console.log('FizzBuzz');
		}else{
			//if only divisible by 3: Print Fizz
			console.log('Fizz');
		}
		
		
	}else if (i % 5 ===0){
		//see if it is divisible by 5
		//if so: Print Buzz
		console.log('Buzz');
	}else{
		//See if it is not divisible by 3 or 5
		//if so: print number	
		console.log(i);
	}
		
	}
	


