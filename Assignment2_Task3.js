

Array.prototype.map2 = function(numbers){
  var number = [];
  this.forEach(function(array){
    number.push(numbers(array));
  })
  return number;
}

var numbers = [1, 2, 3, 4, 5];
var numbersDoubled = numbers.map2(function(number) {
  return number * 2;
});
console.log(numbersDoubled); // should equal [2, 4, 6, 8, 10]