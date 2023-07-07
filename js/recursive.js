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
let sum = 0;
let arr1 = [2, 0, 1, 3, 2];
let arr2 = [2, 3, 1, 1, 4];

function calculOptimMove(arr , n){
    //--------------------- change n in the method call with arr[0]
    // for(let i = sum; i < arr.length; i++){
    //     if(arr.length-1-i >= n ){
    //         sum +=n;
    //         if(sum == arr.length -1){
    //             return;
    //         }
    //         n=arr[sum];
    //     }else{
    //         calculOptimMove(arr,n-1)
    //     }
    // }
    // return sum;

    //------------- change n in the method call with arr.lenght
    if (n == 1){
        return 0;
    }

    let score = Number.MAX_VALUE;
    for (let i = n - 2; i >= 0; i--) {
        if (i + arr[i] >= n - 1) {
            let score_temp = calculOptimMove(arr, i + 1);
            if (score_temp != Number.MAX_VALUE)
            score = Math.min(score, score_temp + 1);
        }
    }
    return score;
}

console.log("Optim: " + calculOptimMove(arr1, arr1.length));
