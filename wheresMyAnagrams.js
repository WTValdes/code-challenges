/*
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
    let result = [];
    let wordsCopy = [...words];
    word = word.split('').sort((a, b) => a.localeCompare(b)).join('');
    for (let i = 0; i < wordsCopy.length; i++) {
      wordsCopy[i] = wordsCopy[i].split('').sort((a, b) => a.localeCompare(b)).join('');
      if (wordsCopy[i] === word) {
        result.push(words[i]);
      }
    }
    return result;
  }

