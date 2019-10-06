// - Find the Longest Word in a String

var log = console.log;
function findLongestWordLength(str) {
  var arr = ["a"];
  var words = str.split(" ");
  
  for (let i = 0;i < words.length; i++) {
      var word = words[i];
      if (word.length > arr[0].length) {
        arr[0] = word;
        log(arr[0]);
      }
  }
  return arr[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
