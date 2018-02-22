How many strings equal to a can be constructed using letters from the string b? 
Each letter can be used only once and in one string only.


function stringsConstruction(a, b) {
    
    // init the counter
    let c = 0;
    // create a list of letters in the srting a
    let aList = a.split("");
    // create a list of letters in the srting b
    let bList = b.split("");
    
    // create a function to check how many time all the letters in aList are in bList
    function findHowManyTimes(aList, bList){
        
        // iterate over aList
        for (var i = 0; i < aList.length; i++) {
            
            // check if letter are in bList
            let indx = bList.indexOf(aList[i]);
            if ( indx != -1 ) {
                // if there, remove it from bList
                bList.splice(indx, 1);
            } 
            
            // if indx === -1 => this letter is no more in bList
            if (indx === -1) {
                // exit out of the function with the return statement
                return;
            }   
        }
        
        // increment the counter
        c++;
        // recursive call of the findHowManyTimes function 
        findHowManyTimes(aList, bList);
    }
    
    // call the findHowManyTimes function
    findHowManyTimes(aList, bList);
    
    // return c at the end
    return c;
}
