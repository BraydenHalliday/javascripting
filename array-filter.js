var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filter (number) {
 let filtered = []
 for( let i = 0; i < number.length; i++) {
  if (number % 2 === 0) {
   filtered.push(number[i]);
  }
  return filtered;
  }
}
console.log(filter(number))
