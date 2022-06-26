/*
*/

function sortArray(array) {
    let result = [];
    let oddCount = 0;
    let odds = [...array].filter(a => a % 2 !== 0).sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
      if (odds.includes(array[i])) {
        result.push(odds[oddCount]);
        oddCount++;
      } else {
        result.push(array[i])
      }
    }
    return result;
  }

