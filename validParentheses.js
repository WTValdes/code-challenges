/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

*/

function validParentheses(parens) {
    parens = parens.split('');
    let open = 0;
    let close = 0;
    
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === "(") {
        open++;
      } 
      if (parens[i] === ")") {
        close++;
      }
      if (close > open) {
        return false;
      }
    }
    
    let leftCount = parens.filter(a => a === "(").length;
    let rightCount = parens.filter(b => b === ")").length;
    
    return leftCount === rightCount;
  }

