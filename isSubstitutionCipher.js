// Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.

function isSubstitutionCipher(string1, string2) {
    
    // create lists of letters
    let list1 = string1.split("");
    let list2 = string2.split("");
    
    // init two dictionary/objects 
    cipher1 = {};
    cipher2 = {};
    
    // create the cipher dictionary for both strings
    for (var i = 0; i < list1.length; i++) {
        cipher1[list1[i]] = list2[i];
        cipher2[list2[i]] = list1[i];
    }
    
    // init two strings (result of the substitution cipher)
    s1 = "";
    s2 = "";
    
    // create both words with the cipher made from the other string
    for (var i = 0; i < list1.length; i++) {
        s1 += cipher2[list2[i]];
        s2 += cipher1[list1[i]];
    }
    
    // return if both cipher is the same (if is substitution cipher) 
    return s1 === string1 && s2 === string2;
}

string1 =  "aaxxaaz";
string2 =  "aazzaay";
isSubstitutionCipher(string1, string2); 
// >>> true;
