// Return the most frequent sum of digits 
//
// Example: For n = 88, the output should be mostFrequentDigitSum(n) = 9.
//
// Here is the first sequence you built: 88, 72, 63, 54, 45, 36, 27, 18, 9, 0;
//
// And here is s(x) for each of its elements: 16, 9, 9, 9, 9, 9, 9, 9, 9, 0.
//
// As you can see, the most frequent number in the second sequence is 9.



function mostFrequentDigitSum(n) {
    
    // create the sum frequency dictionnary
    let sumList = {};
    
    
    // a function that sum the digits 
    function digitSum(n){
        // init the sum 
        let sum = 0;
        // convert the num into a string
        let strNum = ""+n;

        // iterate over the digit string and add every digit to the sum
        for (let i = 0; i < strNum.length; i++){
            sum += Number(strNum[i]);  
        }

        // keep track of the sum to the sum frequency dictionnary
        if (sum in sumList){
            // add 1 if already there
            sumList[sum]++;
        }
        else {
            // create a key value if not in the dictionnary
            sumList[sum] = 1;
        } 

        // return the sum of the digits of n
        return sum;
    }
    
    
    // recursive call the digitSum while n > 0 
    while (n > 0){
        n -= digitSum(n);
    }
    
    // exctract the key of the biggest value in the frequency dictionary
    let maxNum = Object.keys(sumList).reduce((a, b) => sumList[a] > sumList[b] ? a : b);
    
    // return the maxNum
    return Number(maxNum);
}
