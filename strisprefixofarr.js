//revisit this
//1961. Check If String Is a Prefix of Array



/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {

  for (let i = 0; i < s.length; ++i) {
    for (let j = 0; j < words.length; ++j) {
      let currWord = words[j];
      let x = 0
      for (; x < currWord.length; ++x) {
        if (s[i] !== currWord[x] && i < s.length) {
          console.log(s[i], currWord[x])
          return false;
        }
        ++i;
      }

      if (i > s.length && x > currWord.length) {
        return true;
      }
    }
  }

  return false;
};
