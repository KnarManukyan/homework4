const triangleStars= function (num) {
	const arg=(2*num)-1;	

	const stars = function(n){
		if (n <= 0){
			return "";
			}
		return "*"+ stars(n-1);
		}

	const  spaces = function(space) {
		if(space <= 0) {
			return "";
			}
		return " "+ spaces(space-1);
		}

	const astghikner= function (a,space) {
	
		if (a<=0){
			return "";
			} 
		console.log (spaces(space)+stars(a));
    	return astghikner(a-2,space+1);
		}
	return astghikner(arg,0);
	}

const pow = function (base, n) {
	if (n === 0){
		return 1;
		}
	else if (n<0){
		return "Please, try again with a positive exponent";
		}
	return base * pow (base,n-1);
	}

const reverse = function (str) {
    if (str.length===0) {
    	return "";
    	}
    const ktrats = str.substring(0,str.length-1);
    return str[str.length-1]+reverse(ktrats);
	}

const checkerboard = function(n) {
	const line = function(num, isSpace) {
		if (num===0) {
			return "";
			} 
		if(isSpace) {
			return " " + line(num-1,!isSpace);
			} 
		else {
			return '*' + line(num,!isSpace);
			}     
		} 

	const square = function (num1,num2,bool){
		console.log(line(num2,bool))
		if (num1 <= 1) {
			return "";
			}
  		return square(num1-1,num2,!bool);
		}
	return square (n,n,false);
	}