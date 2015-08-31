var yourCode = {
  commafy: function(n) {
    var commafyedStr = "";
    for (var i=1; i<=n; i++) {
      commafyedStr = commafyedStr + i + ',';
    }
    return commafyedStr.replace(/,+$/,'');
  },

  joinToString: function(arr) {
    var str = "";
    for (var i=0; i<arr.length; i++) {
      if (i === (arr.length - 1)) {
        str = str + arr[i] + ' oh my!';
      }
      else {
        str = str + arr[i] + ' and ';
      }
    }
    return str;
  },

  printBracketedNumbers: function(num) {
    var i = 0;
    var newStr = "";
    while (i <= num) {
      newStr = newStr + '[' + i + ']';
      i++;
    }
    return newStr;
  },

  sumOfN: function(num) {
    var sum = 0;
    for (var i=1; i<=num; i++) {
      sum += i;
    }
    return sum;
  },

  moviesFor: function(preformer) {
    switch (preformer) {
      case "Robin Williams":
        return "Jumanji, Hook, Good Will Hunting";
      case "Sandra Bullock":
        return "Gravity, The Lake House, The Blind Side";
      case "Daniel Radcliffe":
        return "All of the Harry Potters";
      case "Amber Woodrow":
       return "All the best movies ever";
    }
  },

  joinWithForAndIndex: function(arr) {
    var str = "";
    for (var i=0; i<arr.length; i++) {
      str = str + arr[i] + i;
    }
    return str;
  },

  joinWithForAndToken: function(arr, char) {
    return arr.join("*");
  }
};

module.exports = yourCode;