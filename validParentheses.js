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
    return open === close;
  }