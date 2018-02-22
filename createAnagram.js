// find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

function createAnagram(s, t) {
    // split the words into lists
    let sList = s.split("");
    let tList = t.split("");
    
    // init a counter
    let c = 0;
    
    // iterate over the sList and check if there is an identical in the tList
    for (let i = 0; i < sList.length; i++){
        // check for identical index
        let indx = tList.indexOf(sList[i]);
        // if there is one remove it from the tList
        if( indx != -1){
            console.log(sList[i]);
            tList.splice(indx,1);
        }
    }
    // return the length of the tList (which mean the number of letters to 
    // replace in the first word to replace to get an anagram).
    return tList.length;
}

// example:
// s = "AABAA";
// t = "BBAAA";
// createAnagram(s, t);
// >>> 1
