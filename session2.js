//Write a Function that tells whether a number is even or odd

//Using If else 
function isEvenOrOdd(num){
    if(num%2===0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(isEvenOrOdd(12));
console.log(isEvenOrOdd(15));
console.log(isEvenOrOdd(0));
console.log(isEvenOrOdd(-2));
console.log(isEvenOrOdd(-7));

//This was our normal basic questions so right now we don't perform multiple check on it but in the upcoming questions we perform every edge case in our code and make our code more perfect.


    
//Using Ternary Operator..Ternary operator is alternate and shorthand for if-else statement

function checkEvenOrOdd(n){
    const result=(n%2===0) ? "Even":"Odd";
    return result;
}

console.log(checkEvenOrOdd(2+6));



//Write a function 

function findSmallestNum(a,b,c){
    if(a<b && a<c){
        return a;
}
    else if(b<a && b<c){
        return b;
    }
    else{
        return c;
    }
}
console.log("Smallest number is ",findSmallestNum(4,5,-1));
console.log("Smallest number is ",findSmallestNum(4,-6,-1));