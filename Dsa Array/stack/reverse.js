function reverse(str){
    let stack = [];
    for(let i = 0; i<str.length; i++){
       
        stack.push(str[i]);
    }
    let reverseString = '';
    while(stack.length>0){
     
        reverseString += stack.pop(); 
    }

    return reverseString; 
}
let str = 'Hello World'
console.log(reverse(str))