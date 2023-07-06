function factorial(n) {
    let result;

    if (n <=1) {
        result =  1;
    }else {
        result = n * factorial(n - 1);
    }
    return result;
}

console.log("factorial : " + factorial(4));

//----------------------------
function fibonacci(n){
    let result ;

    if (n <= 1) {
        result =  n;
    }else{
        result = fibonacci(n-1) + fibonacci(n-2);
    }

    return result;
}

console.log("fibonacci: " + fibonacci(3));

//----------------------
function syracuse(n){

    console.log(n);
    if(n == 1){
       return 1 ;
    }else{
        if(n % 2 == 0){
            n = n/2;
        }else{
            n = n*3 +1 ;
        }
    }
    return syracuse(n);
}

console.log("syracuse: " + syracuse(15));

//------------------------- 

function calculOptimMove(n){

}

