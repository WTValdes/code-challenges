/*
*/

const prevMultOfThree = n => {
    n = n.toString();
    let i = n.length;
    
    while (parseInt(n) % 3 !== 0) {
      n = n.slice(0, i)
      if (i === 0) {
        return null;
      }
      i--;
    }
    return parseInt(n);
  }

