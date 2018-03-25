const stringArr = ['Jerry', 'Macy', 'Jaxon', 'Nancy', 'Bob'];

console.log(stringArr.length);
console.log('Sorted:', stringArr.sort());

const firstName = stringArr.shift();
while ((i = stringArr.shift()) !== undefined) {
  console.log(i);
}
console.log(stringArr);
console.log(firstName);
