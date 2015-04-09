/**
 * Given a string, find the start and end position of enclosing characters along with the inner content
 * @return {Object} - contains the start, end, and inner content of enclosing characters
 */
var pMap = (function(){
  return function(inputStr,openChar,closeChar){
    openChar = openChar || '(';
    closeChar = closeChar || ')';
    var pDict = [];
    var pStack = [];
    inputStr.split('').forEach(function(c,pos){
      if(c === openChar){
        pStack.unshift(pos);
      }
      else if(c === closeChar){
        var start = pStack.shift();
        var end = pos;
        pDict.push({
          'start': start.toString(),
          'end': end.toString(),
          'content': inputStr.split('').slice(start + 1, end -1).join('')
        });
      }
    });
    return pDict;
  };
})();
