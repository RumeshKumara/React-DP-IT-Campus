const numbera = [1,2,3,4,5,6,7,8];
const evenNumbers = [];

for (let i = 0; i < numbera.length; i++) {
    if (numbera[i] % 2 === 0) {
        evenNumbers.push(numbera[i]);
    }

}

console.log(evenNumbers); // Output: [2, 4, 6, 8]