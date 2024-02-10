//My first Code ;

//any two string are equal in size and have same character
/* 1. equal size
2. there character are equal*/

function anagram(str1,str2){
    let n1=str1.length;
    let n2=str2.length;

 // calculating the lenght of the str

if(n1!=n2){
    return false;
}
// sorting the string my sort() method

str1.sort();
str2.sort();

for(let i=0;i<n1;i++){
    if(str1[i]!=str2[i]){
        return false;// if it isn't equal return false
    }
}

return true;

}

let str1=['a','b','s'];
let str2=['a','b','s'];//strng declared in an array


if(anagram(str1,str2)){//funct ion calling
    console.log("Its a anagram ,")
}else{
    console.log("Its not an anagram ")
}