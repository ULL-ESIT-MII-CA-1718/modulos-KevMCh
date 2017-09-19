/* Monkey patching */
String.prototype.repeat = function (times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += this;
  return result;
}
/* * * * * * * * * */
